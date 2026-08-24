# Scene Score 交付包说明

## 产品经理版

用于本地查看 UI 和交互。包含已经构建好的 `dist/`、`scripts/serve-dist.mjs`、`scripts/run-dist.ps1` 和启动说明，不包含源码、`node_modules` 或开发缓存。当前包包含首页视频、排行榜作品预览、五位星级评审和五位教授评审资料。

启动：

```powershell
双击 START_LOCAL_DEMO.cmd
```

浏览器会自动打开 `http://127.0.0.1:4173`。详细说明见 `docs/LOCAL-DEMO-README.md`。

## 后端工程师版

包含完整源码和部署所需文件，后端工程师可直接安装依赖、构建并接入 API：

- `src/`、`public/`、`index.html`
- `package.json`、`package-lock.json`
- `vite.config.ts`、TypeScript、Tailwind 和 ESLint 配置
- `docs/TECH-HANDOFF.md`、`docs/BACKEND-HANDOFF.md`
- 图片、Logo、首页视频和排行榜作品媒体
- 本地开发、构建和静态预览脚本
- `/submission` 投稿页及 `marketing@scenescore.ai` 入口

不包含 `node_modules/`、`dist/`、`.git/`、`output/` 和 `.playwright-cli/`。后端拿到源码后执行 `npm install`，再执行 `npm run check` 和 `npm run build`。

部署时需要把所有未知前端路径回退到 `dist/index.html`，并用后端 API 替换 `src/data/sceneScore.ts` 的静态数据。教授评审详细资料目前仍是静态数据，见 `academicJudges`。
