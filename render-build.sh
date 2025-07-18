#!/bin/bash

# Install dependencies
npm install

# Build frontend
./node_modules/.bin/vite build

# Build backend
./node_modules/.bin/esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist

echo "Build completed successfully!"