# Scene Score 产品经理 UI 本地演示

这份说明只用于查看 UI 和交互，不需要后端服务、数据库或账号。

## 产品经理版压缩包

压缩包已经同时包含源码和已构建的 `dist/`，解压后可以让 Codex 打开项目目录进行查看。

最快启动方式是在项目根目录运行：

```powershell
node .\scripts\serve-dist.mjs
```

然后打开 `http://127.0.0.1:4173/`。Windows 也可以双击根目录的 `START_LOCAL_DEMO.cmd`。

如果需要修改 UI，再使用下面的源码启动方式；首次启动需要执行一次 `npm install`。

## 方式一：从源码启动（推荐）

电脑需要 Node.js 24。PowerShell 打开项目目录：

```powershell
cd "E:\安装\Scenescoreai"
npm install
npm run dev -- --host 127.0.0.1
```

浏览器打开终端显示的地址，通常是：

```text
http://localhost:5173
```

这适合查看开发中的交互，修改文件后页面会自动刷新。

## 方式二：预览已构建 UI

如果拿到的是 UI 演示包并且电脑已经安装 Node.js：

```powershell
cd "解压后的 Scenescoreai 目录"
npm install
npm run build
npm run preview -- --host 127.0.0.1
```

浏览器打开：

```text
http://localhost:4173
```

`preview` 读取 `dist/`，模拟生产静态页面。它不是后端 API 服务，当前所有内容都是前端演示数据。

## 方式三：已有 Python 时直接打开 dist

UI 演示包已经带有 `dist/`，如果电脑有 Python 3，可以不安装 npm 依赖：

```powershell
cd "解压后的 Scenescoreai 目录\dist"
python -m http.server 4173 --bind 127.0.0.1
```

浏览器打开 `http://localhost:4173`。

## 方式四：产品演示包自带服务器

产品经理版压缩包不需要 `npm install`。电脑安装 Node.js 24 后，在压缩包根目录运行：

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\run-dist.ps1
```

也可以直接运行：

```powershell
node .\scripts\serve-dist.mjs
```

浏览器打开 `http://127.0.0.1:4173`。这个小服务器只负责读取 `dist/` 静态文件，并支持 React Router 刷新回退，不连接后端 API。

## 建议验收路径

1. 首页 `/`：向下滚动，确认完整橙色纸张从右下向左上离开，视频固定且不抖动、不缩放。
2. 继续向下滚动：确认橙色纸张完全消失后页面才进入后续内容，且视频自动循环播放。
3. 点击顶部 `排行榜`、`特邀评审`、`评分方法`、`投稿`：确认新页面像纸张一样从左下进入并覆盖旧页面，全程无闪白，转场约 1.25 秒；切换到 `EN` 后对应菜单会显示为 `RANKING`、`JURY SPOTLIGHT`、`METHODOLOGY`、`SUBMISSION`。
4. `/explore`：切换网格/列表，点击 `All / Featured / Short Film / Series` 筛选。
5. `/judges`：点击五位评委，确认照片完整显示、简介同步切换；向下滚动到 `教授评审`，确认五行「博士」职衔在同一列对齐。
6. `/methodology`、`/submission`：确认评分方法与投稿页使用纸张底、黑字、红色强调配色，并可看到投稿邮箱 `marketing@scenescore.ai`。
7. `/series/sample-film-a`：确认作品详情页和返回索引可用。

## 当前演示限制

- 作品、评委、方法论目前由静态演示数据驱动，方便先验收 UI 与交互。
- 没有真实登录、评分提交、管理后台或后端 API。
- 首页视频使用 `public/media/scene-score-home.webm`；排行榜 5 个作品已接入首帧图片与 Hover 视频预览，视频文件位于 `public/media/ranking/`。正式发布前请确认素材授权。
- 生产部署时需要配置 SPA fallback，让 `/explore` 和 `/series/:id` 刷新不返回 404。
