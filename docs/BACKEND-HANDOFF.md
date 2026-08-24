# Scene Score 后端交接说明

> 交接日期：2026-08-22
> 项目状态：前端 UI / 交互预览站，可本地运行并部署；当前仍使用静态示例数据。
> 前端底座：Vite + React + TypeScript，不迁移到 Next.js。

## 1. 先运行项目

在解压后的项目根目录执行：

```powershell
npm ci
npm run check
npm run dev -- --host 127.0.0.1
```

浏览器打开 `http://127.0.0.1:5173/`。

Windows PowerShell 也可以直接运行：

```powershell
.\scripts\run-local.ps1
```

查看生产构建：

```powershell
.\scripts\run-preview.ps1
```

默认预览地址为 `http://127.0.0.1:4173/`。

## 2. 技术栈与目录

| 领域 | 实现 | 主要文件 |
| --- | --- | --- |
| 构建 | Vite 8 | `package.json`, `vite.config.ts` |
| 页面 | React 19 + TypeScript | `src/pages/` |
| 路由 | React Router 7 | `src/router/index.tsx` |
| 路由转场 | Framer Motion | `src/components/layout/Layout.tsx` |
| 滚动与遮罩 | GSAP + ScrollTrigger | `src/pages/Home.tsx` |
| 全局视觉 | CSS | `src/styles/globals.css` |
| 示例数据 | TypeScript 静态数组 | `src/data/sceneScore.ts` |
| 图片 / 视频 | `public/` | `public/images/`, `public/media/` |

当前不要删除 `@gsap/react`、`gsap`、`framer-motion`，它们分别负责 React 生命周期内的动画清理、首页滚动动画和页面纸张转场。

## 3. 页面与路由

| 路由 | 页面 | 当前数据 |
| --- | --- | --- |
| `/` | 沉浸式首页、Hero、作品预览、评委预览 | `works`, `judges` |
| `/explore` | 作品索引、筛选、Grid/List | `works` |
| `/series/:id` | 作品详情 | `getWork(id)` |
| `/judges` | 评委列表、照片、简介 | `judges` |
| `/methodology` | 评分方法说明 | 页面静态文案 |
| `/about` | 项目说明与合作入口 | 页面静态文案 |
| `/submission` | 投稿说明、邮箱和 mailto 表单 | `src/pages/Submission.tsx` |

`/contact`、`/rules`、`/ranking/*` 是兼容性重定向。生产服务器必须配置 SPA fallback：未知路径返回 `index.html`，否则直接刷新 `/explore`、`/submission` 或 `/series/:id` 会 404。

## 4. 建议 API 边界

第一阶段建议只替换数据层，不改页面动画结构：

```text
GET /api/v1/works?type=all|featured|short-film|series&year=all-time
GET /api/v1/works/:id
GET /api/v1/judges
GET /api/v1/methodology
GET /api/v1/site-config
```

统一响应格式：

```json
{
  "data": [],
  "meta": {
    "total": 0,
    "updatedAt": "2026-08-19T00:00:00Z"
  }
}
```

评分未发布时使用 `null`，不要用 `0` 代替：

```json
{
  "score": null,
  "scoreStatus": "pending",
  "scoreBreakdown": [],
  "juryCount": 0
}
```

## 5. 前端数据契约

当前类型定义在 `src/data/sceneScore.ts`，接 API 时优先保持字段名：

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

type Judge = {
  id: string
  name: string
  romanized: string
  role: string
  image: string
  bio: string
}
```

图片字段必须返回 HTTP/CDN URL，例如 `/images/judges/chen-tai-lee.jpeg`，不能返回 Windows 本地路径。`id` 必须稳定，不能使用数组下标。

## 6. 不要破坏的交互约束

### 首页滚动

- 首页使用 GSAP ScrollTrigger pin。
- 第一阶段只移动橙色纸张，视频保持固定，避免视频抖动或尺寸跳变。
- `SCENE SCORE` 与 `REC` 属于橙色纸张的子内容，会随整张纸一起退出；首页英文标题和正文位于视频层，不随纸张移动。
- 右下滚动箭头位于独立顶层，纸张覆盖或移出后都保持可点击。
- 橙色纸张完全离开后才解除 Hero 固定并进入后续内容；视频本身不做缩放动画。
- 视频必须保留 `muted loop playsInline`，以支持静音自动播放。
- 切换到其他菜单时，首页视频会暂停并保留 `currentTime`；回到 Home 后从原位置继续播放，不从头重播。
- 当前首页实际引用 `public/media/scene-score-home.webm`；作品首帧图片为 `public/images/works/work-01.png` 至 `work-05.png`，作品 Hover 视频实际引用 `public/media/ranking/work-01.webm` 至 `work-05.webm`。同目录 MP4 文件作为源素材/兼容素材保留；正式发布前必须确认这些素材已获授权。

### 菜单转场

- 新页面像纸张一样从左下角进入；旧页面保持在下层，直到新页面纸张将其覆盖，避免路由切换闪白或重复渲染新页面。
- 当前转场时长约 `1.25s`。
- Home 等转场完成事件后再初始化 ScrollTrigger，避免切回首页卡顿。
- 导航 active 状态使用矩形边框和红点，不要改成普通下划线。

### 交互入口

`VIEW FULL RANKING`、`OPEN ENTRY`、`VIEW DETAIL`、筛选器、`RESET / TOP / GRID / LIST` 已统一增大字号和图标点击区域。接 API 时保留这些状态和按钮反馈，不要只替换文字。

## 7. 后端接入顺序

1. 保持当前静态页面可以启动，先新增 API client 和 loading/error/empty 状态。
2. 接入 `/works` 与 `/judges`，字段沿用现有 TypeScript 类型。
3. 接入 `/methodology` 和 `/site-config`。
4. 再处理评分发布、权限、管理端和审核流程。
5. 最后补充 `.env.example`、CORS、缓存策略和生产 SPA fallback。

建议新增环境变量：

```text
VITE_API_BASE_URL=http://localhost:8080
```

本地 `.env.local` 不提交 Git，也不要把密钥写进前端变量；前端可见变量只能存公开 API 地址。

## 8. 素材清单与授权提醒

- Logo：`public/images/logo/`
- 评委照片：`public/images/judges/`
- 首页视频：`public/media/scene-score-home.mp4`
- 作品首帧图片：`public/images/works/work-01.png` 至 `work-05.png`
- 作品视频：`public/media/ranking/work-01.mp4` 至 `work-05.mp4`
- 视频说明：`public/media/ATTRIBUTION.md`
- 旧占位视频：`public/media/scene-score-hero.mp4`

当前视频来自用户提供的本地素材；上线前必须确认授权，并同步更新 `ATTRIBUTION.md`。

## 9. 交接验收

```powershell
npm install
npm run check
```

浏览器检查：

- 首页首段滚动时橙色板先移动，视频不抖动。
- 橙色板消失后视频才滚动 / 缩放。
- 从 Explore、Judges、Methodology、About 切回 Home，纸张转场完整且无明显卡顿。
- Explore 的筛选、Grid/List、Reset、Top 均可用。
- Judges 五张照片完整显示，点击评委会同步切换简介。
- Judges 的教授评审列表按文档顺序展示，五行「博士」职衔在固定列对齐。
- Submission 页面显示 `marketing@scenescore.ai`，提交表单先生成 mailto，不依赖后端接口。
- 作品详情直达刷新不 404。
- 桌面与窄屏无横向溢出。
