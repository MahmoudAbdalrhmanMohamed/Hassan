import { defineEventHandler } from "h3"

export default defineEventHandler(async (event) => {
  const host = "el-hassan-resux-portfolio.vercel.app"
  const key = "e8f495123d244f779160538a2e1d094c"
  const keyLocation = `https://${host}/${key}.txt`

  const urlList = [
    `https://${host}/`,
    `https://${host}/cv`,
    `https://${host}/El_Hassan_Mohamed_CV.pdf`,
    `https://${host}/El_Hassan_Mohamed_CV.docx`,
    `https://${host}/llms.txt`,
    `https://${host}/llms-full.txt`
  ]

  const payload = {
    host,
    key,
    keyLocation,
    urlList
  }

  const results: Record<string, { status: number; ok: boolean }> = {}

  const endpoints = [
    "https://api.indexnow.org/IndexNow",
    "https://www.bing.com/indexnow"
  ]

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(payload)
      })

      results[endpoint] = {
        status: response.status,
        ok: response.status === 200 || response.status === 202
      }
    } catch (error: any) {
      results[endpoint] = {
        status: 500,
        ok: false
      }
    }
  }

  return {
    success: true,
    message: "IndexNow submission processed",
    host,
    key,
    keyLocation,
    submittedCount: urlList.length,
    urlList,
    results
  }
})
