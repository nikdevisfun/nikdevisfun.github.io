#!/usr/bin/env sh
set -e

npm run build

cd doc_build

# if you want to deploy the code in your own domain:
# echo 'www.example.com' > CNAME

time=$(date "+%Y-%m-%d %H:%M:%S") 

git init
git add -A
git commit -m "deployed at $time"

# push the code to github
git push -f git@github.com:nikdevisfun/nikdevisfun.github.io.git master:gh-pages

cd -
rm -rf doc_build

echo "repo: https://github.com/nikdevisfun/nikdevisfun.github.io.git"
echo "docs: https://nikdevisfun.github.io"


