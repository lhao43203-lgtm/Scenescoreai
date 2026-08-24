# Scene Score 技术栈交接文档

> 交接对象：后端工程师 / 全栈工程师
> 项目类型：可部署前端预览站；规范：Vite + React，不迁移到 Next.js
> 当前状态：可本地运行、可构建；数据层仍为静态占位数据，尚未接入真实后端。

## 1. 项目目标

Scene Score 是一个面向影视/屏幕作品的公开索引原型。当前交付重点是视觉与交互验证：

- 首页沉浸式视频开场与橙色遮罩退出。
- 页面之间的“纸张”式路由切换。
- 作品索引、筛选、网格/列表视图和作品详情。
- 评委 Spotlight 列表、照片和简介切换。
- 评分方法说明、投稿入口和 About 页面。

品牌素材、评委图片、Logo、临时视频均为 Scene Score 项目自己的本地素材；The Line Studio 仅作为交互参考。

## 2. 技术栈

| 层 | 技术 | 当前用途 |
| --- | --- | --- |
| 构建工具 | Vite 8 | 本地开发、HMR、生产构建 |
| UI | React 19 + TypeScript 5.9 | 页面和组件 |
| 路由 | react-router-dom 7 | 页面路径、动态作品详情、重定向 |
| 页面转场 | Framer Motion 12 | 路由“纸张”从左下进入并覆盖旧页面 |
| 滚动动画 | GSAP 3 + ScrollTrigger | 首页 pin、橙色纸张刚性退出 |
| GSAP React 集成 | @gsap/react | React 生命周期内创建/清理 GSAP 上下文 |
| 图标 | lucide-react | 导航、箭头、播放等线性图标 |
| 样式 | CSS + Tailwind 配置 | 目前主视觉使用 `src/styles/globals.css` |
| 国际化基础 | i18next + react-i18next | 现有语言文件基础；Scene Score 新页面文案当前直接写在组件中 |
| 代码检查 | ESLint + TypeScript project build | `npm run check` |

依赖版本以 `package.json` 和 `package-lock.json` 为准；建议使用 Node.js 24。

## 3. 本地服务器 / 开发环境

### 首次安装

PowerShell：

```powershell
cd "E:\安装\Scenescoreai"
node --version
npm --version
npm install
```

### 启动开发服务器

```powershell
npm run dev
```

默认 Vite 地址通常为：

```text
http://localhost:5173
```

如果需要固定只监听本机：

```powershell
npm run dev -- --host 127.0.0.1
```

如果需要局域网其他设备访问：

```powershell
npm run dev -- --host 0.0.0.0
```

### 验证和生产预览

```powershell
npm run lint
npm run build
npm run preview
```

`npm run preview` 会读取已经生成的 `dist/`，用于检查接近生产的静态资源路径。交付包不带 `node_modules/`、`dist/`，新机器必须先 `npm install`；要预览生产构建，先执行 `npm run build`。

### 环境变量

当前代码没有使用 `VITE_*` 环境变量、API 地址、登录凭证或数据库连接。不要为了启动前端额外创建 `.env.local`。后续接入 API 时建议增加 `.env.example`，并只在 `.env.local` 写本机值。

## 4. 路由表

| 路径 | 页面 | 当前数据来源 |
| --- | --- | --- |
| `/` | 首页沉浸式 Hero + Highlight + Ranking + Method + Jury teaser | `src/data/sceneScore.ts` + `public/media/scene-score-home.webm` |
| `/explore` | 作品索引，筛选和网格/列表切换 | `works` 静态数组 |
| `/series/:id` | 单个作品详情 | `getWork(id)` |
| `/judges` | 评委列表、选中评委照片和简介 | `judges` 静态数组 |
| `/methodology` | 评分方法公开预览 | 页面内静态文案 |
| `/about` | 项目说明和合作入口 | 页面内静态文案 |
| `/submission` | 投稿说明、投稿邮箱和 mailto 表单 | `src/pages/Submission.tsx` 内静态文案 |
| `/contact` | 重定向到 `/submission#submission-form` | Router redirect |
| `/rules` | 重定向到 `/methodology` | Router redirect |
| `/ranking/*` | 重定向到 `/explore` | Router redirect |

Vite 是前端 SPA。生产服务器需要把未知路径回退到 `index.html`，否则直接刷新 `/explore` 或 `/series/sample-film-a` 可能得到 404。

## 5. 当前前端数据契约

文件：`src/data/sceneScore.ts`

### Work

```ts
type SceneWork = {
  id: string
  index: string
  year: string
  title: string
  director: string
  type: string
  status: string
  accent: 'red' | 'blue' | 'gold' | 'green' | 'violet'
  note: string
  image: string
  video: string
}
```

### Judge

```ts
type Judge = {
  id: string
  name: string
  romanized: string
  role: string
  image: string
  bio: string
}
```

图片路径当前是 public 根路径，例如：

```text
/images/judges/chen-tai-lee.jpeg
```

后端返回图片时保持稳定的 URL，不要返回 Windows 本地路径。作品数据目前是示例数据，`status` 大多为 `Score pending`，页面没有假装展示真实评分。

## 6. 建议的后端接入边界

以下是建议接口，不代表当前已经实现。后端接入时优先保持现有字段名，减少页面改动。

```text
GET /api/v1/works?type=all|featured|short-film|series&year=all-time
GET /api/v1/works/:id
GET /api/v1/judges
GET /api/v1/methodology
GET /api/v1/site-config
```

建议响应：

```json
{
  "data": [],
  "meta": {
    "year": "all-time",
    "total": 0,
    "updatedAt": "2026-08-18T00:00:00Z"
  }
}
```

评分字段建议单独建模：

```json
{
  "score": null,
  "scoreStatus": "pending",
  "scoreBreakdown": [],
  "juryCount": 0
}
```

评分未正式发布时返回 `null`，前端继续显示 pending；不要返回 0，因为 0 会被误解成真实评分。

### API 接入注意事项

1. 作品详情页依赖稳定的 `id`，不能使用会变化的数组下标。
2. `type` 目前 UI 显示值是 `Featured`、`Short Film`、`Series`；若 API 使用 slug，前端需要一层映射。
3. 图片和视频建议使用 CDN 或静态对象存储 URL，并设置长期缓存；URL 变更要有版本策略。
4. 列表接口建议支持 `limit`、`cursor`，当前公开预览条目数量很小，可先直接返回完整列表。
5. 如果评分数据涉及评委身份或未公开内容，应由后端控制权限；当前公开预览不包含登录和权限判断。

## 7. 交互和动画边界

### 首页视频阶段

实现文件：`src/pages/Home.tsx`，样式在 `src/styles/globals.css`。

首页先固定 Hero，再让完整橙色 curtain 作为刚性纸张从右下方向左上离开。纸张移动期间视频通过 `pinType: 'fixed'` 固定在视口，不缩放、不改变尺寸；纸张完全离开后才解除固定并进入后续内容。英文标题和正文位于视频层，右下滚动箭头位于独立顶层；`SCENE SCORE` 与 `REC` 留在 curtain 内并随纸张退出。

不要给视频增加 `top/left/width/height` 或缩放动画；如要替换首页视频，只需要替换 `public/media/scene-score-home.webm`，保留 `muted loop playsInline`。视频现在由脚本启动：首次进入 Home 可以播放；离开 Home 时会暂停并记录 `currentTime`；从其他路由切回 Home 时恢复到原位置，等 1.25 秒纸张转场完成后再继续播放，避免解码和转场同时发生。

视频必须适合静音自动播放。若后端返回视频 URL，建议提供 MP4/H.264 主格式，并保留一个静态封面或 CSS fallback。

### 路由纸张转场

实现文件：`src/components/layout/Layout.tsx`。

- 新页面从左下角进入，覆盖当前页面。
- 旧页面保持在下层，直到新页面纸张将它完全覆盖，避免闪白和新页面重复渲染。
- 当前时长为 1.25 秒。
- Home 初始化 ScrollTrigger 会等待 `route-transition-complete`，避免切回首页时测量 pin 位置造成卡顿。
- 路由切换时使用即时 `window.scrollTo`，不使用全局 smooth scroll。

如果新增页面：

1. 在 `src/router/index.tsx` 增加 Route。
2. 在 `Header.tsx` 的 `navLinks` 中决定是否出现在主导航。
3. 检查新页面是否需要深色 Header 和是否能在刷新时由 Vite fallback 正常返回。

### 导航状态

- 当前路径通过 `NavLink` 显示矩形 active 状态。
- 鼠标进入菜单项会显示 hover 状态，离开导航区后清除 hover。
- 移动端用 Menu/X 打开抽屉；Escape 可关闭。

## 8. 素材与授权

- 首页实际引用视频：`public/media/scene-score-home.webm`；同目录 MP4 作为源素材/兼容素材保留。
- 作品首帧图片：`public/images/works/work-01.png` 至 `work-05.png`。
- 作品实际引用视频：`public/media/ranking/work-01.webm` 至 `work-05.webm`，由 `src/data/sceneScore.ts` 映射到 5 个作品详情；同目录 MP4 作为源素材/兼容素材保留。Explore 默认展示图片，Hover 后淡入视频。
- 旧 The Line 参考视频：`public/media/the-line-home-hero.mp4`，仅用于比较，不作为正式素材。
- 旧占位视频：`public/media/scene-score-hero.mp4`，仅用于比较，正式素材确定后可移除。
- 视频来源及临时授权说明：`public/media/ATTRIBUTION.md`。
- Logo：`public/images/logo/`。
- 评委照片：`public/images/judges/`。
- `images/` 根目录保留了旧素材副本，当前 Scene Score 页面主要引用 `public/images/` 下的文件；整理素材时不要误删 public 版本。

替换正式素材时，优先保持文件名和路径不变，能避免修改组件。首页路径是 `scene-score-home.webm`，作品视频路径由 `src/data/sceneScore.ts` 管理；若必须改名，需同步检查 `Home.tsx`、`Explore.tsx` 和 `SeriesDetail.tsx`。

## 9. 后端接手建议顺序

1. 先按本文件启动本地前端，访问所有路由并确认基础布局。
2. 将 `src/data/sceneScore.ts` 抽为 API client + loading/error/empty 状态，不要一开始改动画结构。
3. 先接 `/works` 和 `/judges`，保持字段与当前 TypeScript 类型一致。
4. 再接方法论和 `site-config`，处理发布时间、年份和公开状态。
5. 最后增加评分发布、管理端或鉴权；这些功能不应阻塞公开浏览页面。
6. 后端接口稳定后，补充 `.env.example`、CORS 规则和生产 SPA fallback。

## 10. 交付前检查

在项目根目录执行：

```powershell
npm install
npm run check
```

浏览器至少检查：

- `/` 首次滚动：橙色纸张先整体移动，视频不抖动、不缩放；纸张完全离开后页面才进入后续内容。
- 从 `/explore`、`/judges`、`/methodology`、`/submission` 切回 `/`：1.25 秒纸张转场结束后首页 pin 正常。
- `/explore` 的筛选与网格/列表按钮。
- `/judges` 点击五位评委，照片不被灰色边框挤压且显示完整。
- `/judges` 的 `教授评审` 列表中，姓名与「博士」拆为固定视觉列，五行职衔保持对齐。
- `/submission` 能看到 `marketing@scenescore.ai`，表单使用 mailto，不假设后端已接收投稿。
- `/series/sample-film-a` 刷新不 404（本地 Vite dev 默认支持；生产服务器需配置 fallback）。
- 1440px 桌面宽度与窄屏宽度下无横向溢出。

## 11. 打包内容

源码交付包应保留：

- `src/`
- `public/`
- `images/`
- `package.json`
- `package-lock.json`
- `vite.config.ts`、TypeScript、ESLint、Tailwind/PostCSS 配置
- `README.md`
- `docs/TECH-HANDOFF.md`

源码包不应包含：

- `node_modules/`
- `dist/`
- `output/`
- `.playwright-cli/`
- `.git/`
- 本地 `.env.local`、密钥或账号信息
