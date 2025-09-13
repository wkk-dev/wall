# Honor Wall App

## 项目介绍
Honor Wall App 是一个用于展示学生荣誉的网页应用，旨在激励学生积极向上，表彰优秀表现。该应用分为多个区域，包括积分排行榜、前5名成绩排行、每周优秀之星、学习之星、最美集体、最美班级、最美宿舍等，支持高一、高二、高三三个年级的数据。

## 技术栈
- 前端：Vue 3, Vite
- 后端：Node.js, Express
- 数据库：Cloudflare KV, Cloudflare D1 或 MongoDB
- 状态管理：Vuex
- 路由管理：Vue Router
- 移动端优化

## 项目结构
```
honor-wall-app
├── frontend
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── views
│   │   ├── router
│   │   ├── store
│   │   ├── types
│   │   ├── App.vue
│   │   └── main.ts
│   ├── index.html
│   ├── vite.config.ts
│   └── package.json
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── routes
│   │   ├── models
│   │   ├── services
│   │   ├── gui
│   │   ├── types
│   │   └── app.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
└── README.md
```

## 功能
- **积分排行榜**：展示学生的积分情况，激励学生努力学习。
- **前5名成绩排行**：显示成绩最优秀的前5名学生。
- **每周优秀之星**：每周评选出表现突出的学生。
- **学习之星**：表彰学习表现突出的学生。
- **最美集体、班级、宿舍**：展示表现优秀的集体、班级和宿舍。
- **管理员界面**：提供数据更新和管理功能。

## 使用说明
1. 克隆项目到本地：
   ```
   git clone <repository-url>
   ```
2. 进入前端目录并安装依赖：
   ```
   cd frontend
   npm install
   ```
3. 进入后端目录并安装依赖：
   ```
   cd backend
   npm install
   ```
4. 启动前端和后端服务：
   ```
   npm run dev  # 在前端目录
   npm start    # 在后端目录
   ```

## 部署
可以将前端应用部署在 Vercel、Netlify 或 Cloudflare Pages，后端应用可以部署在任何支持 Node.js 的平台。

## 贡献
欢迎任何形式的贡献！请提交问题或拉取请求。

## 许可证
本项目采用 MIT 许可证。