#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

# Fetch the latest changes
git fetch

# Check if local branch is behind the remote branch
if ! git diff --quiet HEAD..origin/$(git rev-parse --abbrev-ref HEAD); then
  echo "Your branch is behind the remote branch. Please pull the latest changes before pushing."
  exit 1
fi
