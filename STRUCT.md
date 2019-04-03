├── api
│   ├── request.js // 网络请求的封装文件
│   └── home.js // 抽取某个页面的网络请求部分
├── assets // 资源文件夹 图片、音频、视频等
├── components // 展示型组件，按照容器组件分文件夹
│   ├── App // App 容器组件的展示型子组件目录
│       └── index.js // 顶层子组件
├── containers // 容器组件
│   └── App.js
├── modules // redux 模块，包括 reducer 部分与 action 部分
│   ├── home // 对应某个容器组件，集中了这个容器的 reducer 和 action
│   │   ├── actions.js
│   │   └── reducer.js
│   ├── reducers.js // 合并后的总的 reducer
│   └── types-constant.js // 抽取出的 type 常量
├── scss // 样式文件
│   ├── _common.scss
│   └── home.scss
├── store // store 配置
│   ├── configureStore.js
│   └── index.js
└── utils // 公用的工具函数
│   └── bindActions.js
├── index.html // 页面模板
├── routes.js // 路由配置
└── index.js // react 入口