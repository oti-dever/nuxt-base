# Nuxt Base Layer

本项目可作为任何 Nuxt 3 + pnpm 项目的基础层（Nuxt Layer），包括前台、中后台、移动端等。

Nuxt Layer 是一种模块复用技术，可通过扩展已有项目实现项目的组件和依赖复用。Nuxt Layer 能显著降低项目的维护成本，提高项目的可维护性和代码复用率，有利于项目之间的逻辑和依赖解耦。

建议使用 pnpm 作为 monorepo 管理工具，然后使用 Git submodule 管理 Nuxt Layer。如果你有修改 Nuxt Layer 的需求，可以 Fork 本项目，然后将 Fork 后的项目作为子模块添加到你的项目。

## 特性

- [x] 项目核心特性
  - [x] 特性可选，可重配置，预设配置可覆盖
  - [x] 使用 pnpm 管理 monorepo
  - [x] 使用 Git submodule 管理 Nuxt Layer
  - [x] 新项目可直接复用 ESLint，无需安装依赖或配置
  - [x] 更简单的 Git 钩子
- [x] 开发基础功能
  - [x] Tailwind CSS 预设配置
  - [x] 支持响应式暗色主题
  - [x] 开箱即用的 Pinia 存储，随处可用的 `useStore()` 和持久化支持
  - [x] 万能的 VueUse
- [x] Nuxt 3 全部特性
  - [x] Vue 3 + Vite 5 构建
  - [x] 完备的 TypeScript 支持
  - [x] Vue 3 语法糖，随处使用 `ref()`
  - [x] 组件、钩子、工具函数自动导入，无需任何 `import`
  - [x] 文件系统路由，无需配置
- [x] 扩展功能
  - [x] 国际化支持，扁平的 YAML 语法
  - [ ] 可选的 PWA 支持（_正在支持中..._）
  - [ ] 可选的 SEO 支持（_正在支持中..._）

另外，本项目还提供几个 [预设层](./packages/)，包括：

- [`base`](./)：基础层，即根目录，包含 Nuxt 3 项目所需的基础配置。
- [`antdv-pro`](./packages/antdv-pro/)：Ant Design 预设层，全面兼容 Ant Design。

## 开始

下面以 `base` 基础层为例，介绍如何使用本项目快速搭建 Nuxt 应用。

首先，将此项目添加到你的项目：

```bash
git submodule add https://github.com/oti-dever/nuxt-base base
```

使用 `pnpm` 创建 monorepo，新建 `pnpm-workspace.yaml` 文件：

```yaml
packages:
  - base
```

配置 Nuxt3 项目，编辑 `nuxt.config.js` 文件：

```ts
export default defineNuxtConfig({
  extends: [
    './base',
  ],
})
```

启动项目：

```bash
pnpm i
pnpm dev
```

## 更新

更新全部子模块：

```bash
git submodule update --init --recursive
```

更新指定子模块：

```bash
git submodule update --remote base
```

## License

MIT.
