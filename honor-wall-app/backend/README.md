# Honor Wall Backend

## 项目简介
荣誉墙后端项目是一个用于管理和展示学生荣誉的系统。该系统支持高一、高二、高三三个年级的数据，提供积分排行榜、前5名成绩排行、每周优秀之星、学习之星、最美集体、最美班级、最美宿舍等功能。

## 技术栈
- Node.js
- Express
- TypeScript
- MongoDB / Cloudflare D1 / Cloudflare KV（可选）

## 项目结构
```
backend
├── src
│   ├── controllers         # 控制器，处理业务逻辑
│   ├── routes              # 路由，定义 API 接口
│   ├── models              # 数据模型，定义数据结构
│   ├── services            # 服务，处理数据库交互
│   ├── gui                 # 管理面板的 GUI 组件
│   ├── types               # TypeScript 类型定义
│   └── app.ts              # 应用入口文件
├── package.json            # npm 配置文件
├── tsconfig.json           # TypeScript 配置文件
└── README.md               # 项目文档
```

## 安装与运行
1. 克隆项目：
   ```
   git clone <repository-url>
   cd honor-wall-app/backend
   ```

2. 安装依赖：
   ```
   npm install
   ```

3. 启动服务器：
   ```
   npm start
   ```

## API 文档
- `/api/honor` - 获取荣誉墙数据
- `/api/honor/update` - 更新荣誉墙数据

## 数据存储
数据可以存储在 MongoDB、Cloudflare D1 或 Cloudflare KV 中，具体选择取决于项目需求和部署环境。

## 移动端优化
后端 API 设计考虑了移动端的使用场景，确保在手机设备上也能流畅访问。

## 贡献
欢迎任何形式的贡献！请提交问题或拉取请求。

## 许可证
本项目采用 MIT 许可证。