#!/bin/bash
set -e

APP_DIR="/var/www/shirintravel"
PORT="3000"

cd "$APP_DIR"

git pull origin main

npm install
npm run build

pm2 delete shirintravel || true
pm2 start npm --name shirintravel -- run preview -- --host 0.0.0.0 --port "$PORT"
pm2 save

sudo systemctl reload nginx

echo "Deploy completed on port $PORT"