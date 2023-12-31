## 🚀 技术栈

-   React v18
-   react-dom v18
-   TypeScript v4
-   webpack v5
-   mobx v6
-   mobx-react-lite v3
-   react-router-dom v6

## ⌛️ 安装项目依赖

-   `node` >= 16.0.0
-   `yarn` >= 1.22.17

```
npm
$ npm install

yarn
$ yarn
```

## 🚀 运行项目

```
npm
$ npm run start

yarn
$ yarn dev
```

## 📦 打包编译

```
查看package.json scripts里面的字段
```

## 代码提交规范

```
git <type>: <subject>
git commit -m “feat: 项目初始化”
```

### type 参考:

```
fix       🐛 Bug修复
feature   ✨ 引入新特性
docs      📝 文档书写改动
prune     🔥 移除代码或文件
ui        💄 更新UI和样式文件
perf      ⚡ 性能相关优化
rocket    🚀 部署功能
style     🎨 style修改
init      🎉 初始化提交
release   🔖 发布版本
wip       🚧 正在进行中, 且有可能出现不稳定运行的提交
config    🔧 修改配置文件
refactot  🔨 重构(既不增加新功能, 也不修改bug的代码改动)
merge     🔀 合并分支
```

## 📂 目录结构

```
    ├── .vscode
    │   └──setting.json                 # 先于vscode全局的settings.json配置
    ├── doc                             # 开发文档记录
    ├── webpack                         # 打包编译
    │   └──config                       # webpack配置
    │       ├── webpack.common.js       # 基础配置
    │       ├── webpack.dev.js          # 开发环境配置
    │       └──webpack.prod.js          # 生产环境配置
    ├── pubilc
    │   ├──favicon.ico                  # HTML图标
    │   └──index.html                   # HTML入口模板
    ├── src
    |   ├── api                         # 接口配置
    |   ├── assets                      # 静态资源
    │   ├── components                  # 项目通用通用组件
    │   ├── router                      # 统一路由入口
    │   ├── store                       # 数据共享
    │   ├── styles                      # 全局样式
    │   ├── utils                       # 工具库
    │   ├── view                        # 页面
    │   ├── App.tsx                     # 主界面
    │   └──index.tsx                    # 入口文件
    ├── .babelrc.js                     # babel配置
    ├── .editorconfig                   # 跨编辑器维护一致编码风格
    ├── env.cmdrc.js                       # 环境变量配置
    ├── .eslintignore                   # ESLint忽略检测文件
    ├── .eslintrc.js                    # ESLint配置
    ├── .gitignore                      # git提交忽略文件
    ├── .npmrc
    ├── .prettierignore                 # prettierc忽略文件
    ├── .prettierrc                     # prettierc配置
    ├── .stylelintrc.js                 # 代码风格配置
    ├── package.json                    # 依赖包管理
    ├── README.md                       # 项目说明
    ├── tsconfig.json                   # ts配置文件
    └── yarn.lock                       # yarn安装包锁定管理

```

# 项目技术

react、antd、dva、umi

react 框架作用：模块化、组件化、工程化

# 视频学习

课题：React 入门到实战关注：柴柴\_前端教书匠

学习文档： https://www.yuque.com/fechaichai/qeamqf

# 优化方式,可以有效减小 bundle 大小,提升页面加载速度

1. 对大图片进行压缩 - 使用图片压缩工具(如 TinyPNG),对 PNG、JPG 等大图片进行无损压缩。
2. 懒加载图片 - 使用 React 懒加载库(如 react-lazyload),只在图片进入可视区域时才加载。
3. 代码拆分 - 使用 React.lazy 和 Suspense 把代码拆分成 chunk,避免单个文件过大。
4. 动态导入 - 对于不需要初始就加载的模块通过动态 import()来异步导入。
5. Tree Shaking - 确保 Webpack 开启了 Tree Shaking,去除无用的代码。
6. 静态资源 CDN - 大文件考虑放到 CDN,不打包到 bundle 中。
7. 忽略警告 - 如果文件大小确实无法缩减,可以增加 size-limit 的警告阈值。
8. 懒加载路由 - 对于页面组件,可以通过 React Router 的懒加载只加载当前需要的组件。
9. 代码分割与动态导入 - 将大组件拆分为多个 chunk,按需加载。
