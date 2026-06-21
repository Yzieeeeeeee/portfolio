#!/bin/bash
set -e

echo "Building..."
npm run build

echo "Copying index.html to 404.html (SPA fallback)..."
cp dist/index.html dist/404.html

echo "Deploying to GitHub Pages..."
npx gh-pages -d dist

echo "Done."
