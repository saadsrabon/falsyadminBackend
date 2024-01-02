#!/bin/bash

# Check if a dynamic comment is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <dynamic_comment>"
  exit 1
fi

# Assign the dynamic comment
dynamic_comment="$1"

# Git commands
git add .
git commit -m "$dynamic_comment"
git push
