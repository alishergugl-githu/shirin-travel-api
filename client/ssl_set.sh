#!/bin/bash
set -e

DOMAIN="shirintravel.uz"
EMAIL="akhadjan37@mail.ru"

sudo apt update
sudo apt install -y certbot python3-certbot-nginx

sudo nginx -t
sudo systemctl reload nginx

sudo certbot --nginx \
  -d "$DOMAIN" \
  -d "www.$DOMAIN" \
  --email "$EMAIL" \
  --agree-tos \
  --non-interactive \
  --redirect

sudo systemctl reload nginx

echo "SSL configured successfully for https://$DOMAIN"