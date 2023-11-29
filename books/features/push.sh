#!/bin/bash
git add .
formatted_date=$(date "+%Y-%m-%d %H:%M:%S")
git commit -m "$formatted_date"
git push --force
