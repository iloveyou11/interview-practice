## 在线体验
[在线地址](https://iloveyou11.github.io/interview-practice/)

## 部署流程
这里总结一下这个项目是如何部署到github进行访问的。

1. 运行`npm run build`构建项目，会发现项目下会生成`docs`文件夹，其中存放了所有的静态资源。
2. 在 `src/.vuepress/config.js` 中设置正确的 base。如果打算发布到 `https://<USERNAME>.github.io/`，则可以省略这一步，因为 base 默认即是 "/"。如果打算发布到 `https://<USERNAME>.github.io/<REPO>/`，则将 base 设置为 `/<REPO>/`。
3. 在项目根目录下创建`deploy.sh`文件，这里我决定发布到`https://github.com/<USERNAME>/<REPO>`，文件内容如下：
```sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:iloveyou11/interview-practice.git master:gh-pages

cd -
```
4. 执行脚本`sh deploy.sh`，直到部署成功。
5. 这时可以直接通过`https://<USERNAME>.github.io/<REPO>`访问在线页面。