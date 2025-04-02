find . -mindepth 1 -name '.git' -prune -o ! -name 'push.sh' -exec rm -rf {} +
rsync -a --exclude='.git' --exclude='node_modules' /Users/tuotu/project/ho/uniswap-v3-deploy/ .
git add -A && git commit -m "new version" && git config pull.rebase false && git pull origin dev && git push --set-upstream origin dev
git checkout test
git merge --no-ff dev
git push
git checkout -