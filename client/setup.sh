#!/bin/bash
set -e

DOMAIN="shirintravel.uz"
EMAIL="akhadjan37@mail.ru"
APP_DIR="/var/www/shirintravel"
REPO_URL="https://github.com/alishergugl-githu/shirinTravel1"
PORT="3000"

sudo apt update
sudo apt install -y curl git nginx certbot python3-certbot-nginx

# Install Node.js 22
if ! command -v node >/dev/null || ! node -v | grep -qE '^v22'; then
  curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
  sudo apt install -y nodejs
fi

# Install PM2
sudo npm install -g pm2

# Clone project
sudo mkdir -p "$APP_DIR"
sudo chown -R "$USER":"$USER" "$APP_DIR"

if [ ! -d "$APP_DIR/.git" ]; then
  git clone "$REPO_URL" "$APP_DIR"
fi

cd "$APP_DIR"

npm install
npm run build

# Start app on port 3000
pm2 delete shirintravel || true
pm2 start npm --name shirintravel -- run preview -- --host 0.0.0.0 --port "$PORT"
pm2 save
pm2 startup systemd -u "$USER" --hp "$HOME" | tail -n 1 | bash || true

# Nginx config
sudo tee /etc/nginx/sites-available/shirintravel > /dev/null <<EOF
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;

    location / {
        proxy_pass http://127.0.0.1:$PORT;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

sudo ln -sf /etc/nginx/sites-available/shirintravel /etc/nginx/sites-enabled/shirintravel
sudo nginx -t
sudo systemctl restart nginx

# SSL
sudo certbot --nginx \
  -d "$DOMAIN" \
  -d "www.$DOMAIN" \
  --non-interactive \
  --agree-tos \
  -m "$EMAIL" \
  --redirect

sudo systemctl reload nginx

echo "Setup completed: https://$DOMAIN"