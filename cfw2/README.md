# 校园荣誉墙网页

一个简洁、美观的校园荣誉墙网页，用于展示学生、班级和宿舍的各种荣誉。

## 功能特点

- **积分排行榜**：展示学生积分前5名，并通过图表直观呈现
- **优秀之星**：包括每周优秀之星和学习之星
- **最美集体**：展示最美班级和最美宿舍
- **年级筛选**：支持按高一、高二、高三年级筛选数据
- **数据管理**：提供GUI界面进行数据的添加、编辑和删除
- **数据存储**：使用浏览器本地存储保存数据
- **响应式设计**：支持桌面和移动端访问

## 技术栈

- HTML5
- Tailwind CSS v3
- JavaScript
- Font Awesome
- Chart.js

## 快速开始

### 本地开发

1. 克隆或下载此项目到本地
2. 直接在浏览器中打开 `index.html` 文件即可运行

### 部署说明

此项目可以部署在多种平台上，以下是一些常用平台的部署方法：

#### Cloudflare Pages

1. 登录 [Cloudflare Pages](https://pages.cloudflare.com/)
2. 点击 "Create a project"
3. 连接你的GitHub/GitLab账户，选择此项目仓库
4. 配置构建设置：
   - Framework preset: None
   - Build command: 留空
   - Build output directory: 留空 (使用根目录)
5. 点击 "Save and Deploy"

#### Vercel

1. 登录 [Vercel](https://vercel.com/)
2. 点击 "New Project"
3. 导入你的GitHub/GitLab仓库
4. 配置项目设置：
   - Framework Preset: Other
   - Build Command: 留空
   - Output Directory: 留空
5. 点击 "Deploy"

#### Netlify

1. 登录 [Netlify](https://app.netlify.com/)
2. 点击 "Add new site" > "Import an existing project"
3. 连接你的Git仓库
4. 配置构建设置：
   - Build command: 留空
   - Publish directory: 留空
5. 点击 "Deploy site"

## 数据存储

当前版本使用浏览器的 localStorage 进行数据存储。如果需要部署到生产环境并使用更可靠的数据存储方式，可以考虑：

1. **Cloudflare KV**：适合Cloudflare Pages部署
2. **Cloudflare D1**：SQL数据库，适合需要更复杂查询的场景
3. **MongoDB Atlas**：云托管的MongoDB服务

## 开发指南

### 添加新功能

1. 修改 `index.html` 添加新的HTML结构
2. 在 `script.js` 中实现交互逻辑
3. 使用Tailwind CSS类进行样式设计

### 数据结构

```javascript
{
    rankings: [ // 积分排行
        { id: Number, name: String, grade: Number, score: Number }
    ],
    weeklyStars: [ // 每周优秀之星
        { id: Number, name: String, grade: Number, description: String }
    ],
    studyStars: [ // 学习之星
        { id: Number, name: String, grade: Number, description: String }
    ],
    bestClasses: [ // 最美班级
        { id: Number, name: String, grade: Number, description: String }
    ],
    bestDorms: [ // 最美宿舍
        { id: Number, name: String, grade: Number, description: String }
    ]
}
```

## 注意事项

- 当前使用的是浏览器本地存储，清除浏览器缓存会导致数据丢失
- 如需长期保存数据，请考虑使用云端数据库
- 管理员功能目前没有身份验证，在生产环境中应添加适当的安全措施

## 许可证

MIT License