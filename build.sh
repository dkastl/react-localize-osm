#!/usr/bin/env bash

# Load environment variables from .env file
export $(grep -v '^#' .env | xargs)

npm ci

npm run build 
rm -rf docs
mv build docs
echo "${CNAME:-localize.osm.tracestrack.com}" > docs/CNAME
git add .
