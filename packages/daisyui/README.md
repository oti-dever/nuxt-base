# DaisyUI 模板

DaisyUI 是一个 Tailwind CSS 插件，用于快速制作精美的页面和简化 Tailwind CSS 类名的使用。

技术选型中，选择 DaisyUI 主要包含以下考量：

- 表现优先，快速制作精美的页面，注重视觉体验
- 框架无关，任何支持 Tailwind CSS 的框架都可以使用，无迁移成本
- 风格化的 Tailwind CSS 类名，使得样式标准化，主题风格自然

因此本模板一般适用于前台，需要视觉传达的页面，不适合后台等需要密集业务逻辑的页面。

## 开发计划

- 【长期】将 DaisyUI 大多数内容封装为组件，以便于在项目中快速使用。
  - 分离组件和工具，作为独立的包来扩展已有项目
- 【短期】将目前所需要的组件的、日常经常使用的内容封装为组件

## 组件列表

- [x] `AppHeader`：页面通用 Header，实现了切换语言和切换主题的功能
- [x] `AppTheme`：页面通用主题切换
- [ ] `AppSidebar`：页面通用 Sidebar
- [ ] `AppFooter`：页面通用 Footer
- [x] `DaisyButton`：按钮
- [ ] 反馈组件
  - [ ] `DaisyAlert`：警告提示
  - [x] `DaisyLoading`：加载
  - [ ] `DaisyProgress` 进度条
  - [ ] `DaisyRadialProgress` 圆形进度条
  - [ ] `DaisySkeleton` 骨架屏
  - [ ] `DaisyToast` 弹框（实现 API）
  - [ ] `DaisyTooltip` 文字提示（实现 API）
- [ ] 自动注入的 API 和工具
  - [ ] `useDialog`：对话框
  - [ ] `useToast`：消息提示
  - [ ] `useModal`：模态框
  - [ ] `useLoading`：加载状态
