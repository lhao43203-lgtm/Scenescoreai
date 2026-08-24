import { createReadStream } from 'node:fs'
import { promises as fs } from 'node:fs'
import { createServer } from 'node:http'
import { extname, join, normalize, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = resolve(fileURLToPath(new URL('..', import.meta.url)))
const distRoot = resolve(projectRoot, 'dist')
const host = process.env.HOST ?? '127.0.0.1'
const port = Number(process.env.PORT ?? 4173)

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.mp4': 'video/mp4',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
}

const sendFile = async (response, filePath) => {
  const extension = extname(filePath).toLowerCase()
  const stats = await fs.stat(filePath)
  response.writeHead(200, {
    'Content-Length': stats.size,
    'Content-Type': contentTypes[extension] ?? 'application/octet-stream',
    'Cache-Control': 'no-cache',
  })
  createReadStream(filePath).pipe(response)
}

const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url ?? '/', `http://${host}:${port}`).pathname)
    const requestedPath = normalize(pathname).replace(/^([/\\])+/, '')
    const candidate = resolve(distRoot, requestedPath)
    const isInsideDist = candidate === distRoot || candidate.startsWith(`${distRoot}\\`) || candidate.startsWith(`${distRoot}/`)
    if (!isInsideDist) {
      response.writeHead(403)
      response.end('Forbidden')
      return
    }

    let filePath = candidate
    try {
      if ((await fs.stat(filePath)).isDirectory()) filePath = join(filePath, 'index.html')
    } catch {
      filePath = join(distRoot, 'index.html')
    }

    try {
      await sendFile(response, filePath)
    } catch {
      await sendFile(response, join(distRoot, 'index.html'))
    }
  } catch {
    response.writeHead(500)
    response.end('Internal Server Error')
  }
})

server.listen(port, host, () => {
  console.log(`Scene Score dist server: http://${host}:${port}`)
  console.log('Press Ctrl+C to stop.')
})
