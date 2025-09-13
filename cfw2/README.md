# Twikoo评论系统演示

一个基于Twikoo的美观、流畅的评论系统实现，使用Tailwind CSS进行样式设计。

## 功能特点

- **美观的用户界面**：使用Tailwind CSS构建现代、简洁的UI设计
- **流畅的加载动画**：评论加载过程中显示优雅的动画效果
- **响应式设计**：适配桌面端和移动端设备
- **完全可定制**：支持自定义主题颜色、评论框样式等
- **平滑的交互体验**：悬停效果、过渡动画等增强用户体验
- **评论功能完整**：支持评论、回复、点赞等基本功能

## 技术栈

- HTML5
- Tailwind CSS v3
- JavaScript
- Font Awesome
- Twikoo 评论系统

## 快速开始

### 本地开发

1. 克隆或下载此项目到本地
2. 直接在浏览器中打开 `index.html` 文件即可查看演示效果

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

## 配置说明

### 部署自己的Twikoo服务端

当前演示使用的是公共的Twikoo演示服务端。在实际使用中，你应该部署自己的Twikoo服务端：

1. 按照 [Twikoo官方文档](https://twikoo.js.org/guide/deploy.html) 部署服务端
2. 获取你的环境ID
3. 在 `index.html` 文件中修改以下代码：

```javascript
// 将
envId: 'https://twikoo-demo.vercel.app',
// 修改为
envId: '你的环境ID',
```

### 自定义样式

你可以通过修改 `index.html` 文件中的CSS变量来自定义评论系统的样式：

```css
:root {
    --twikoo-theme-color: #3B82F6; /* 主题色 */
    --twikoo-border-color: #E5E7EB; /* 边框色 */
    --twikoo-bg-color: #FFFFFF; /* 背景色 */
    --twikoo-text-color: #374151; /* 文字颜色 */
    --twikoo-light-text: #6B7280; /* 次要文字颜色 */
    --twikoo-bg-hover: #F9FAFB; /* 悬停背景色 */
}
```

## 注意事项

- 当前演示使用的是公共的Twikoo服务端，可能存在数据安全和稳定性问题
- 对于生产环境，请务必部署自己的Twikoo服务端
- 首次评论的用户将自动成为管理员，可以在评论区设置中管理评论

## 许可证

MIT License