# 雾里红基础项目模板

本项目适用于搭建 Nuxt3 + pnpm 项目。

## 开始

将此项目添加到你的项目：

```bash
git submodule add https://github.com/oti-dever/nuxt-base base
```

使用 pnpm 创建 monorepo，新建 `pnpm-workspace.yaml` 文件：

```yaml
packages:
  - base
  - packages/*
```

配置 Nuxt3 项目，编辑 `nuxt.config.js` 文件：

```ts
export default defineNuxtConfig({
  extends: [
    './base'
  ]
})
```

## 更新

更新全部子模块：

```bash
git submodule update --init --recursive
```

更新指定子模块：

```bash
git submodule update --remote common
```

## License

MIT.
