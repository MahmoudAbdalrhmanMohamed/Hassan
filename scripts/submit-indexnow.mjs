/**
 * IndexNow Submission Script
 * Protocol: https://www.indexnow.org/documentation
 * Instantly submits website URLs to Bing, Yandex, and other search engines participating in IndexNow.
 */

const HOST = 'el-hassan-resux-portfolio.vercel.app'
const KEY = 'e8f495123d244f779160538a2e1d094c'
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`

const URLS = [
  `https://${HOST}/`,
  `https://${HOST}/cv`,
  `https://${HOST}/El_Hassan_Mohamed_CV.pdf`,
  `https://${HOST}/El_Hassan_Mohamed_CV.docx`,
  `https://${HOST}/llms.txt`,
  `https://${HOST}/llms-full.txt`
]

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: URLS
}

const ENDPOINTS = [
  'https://api.indexnow.org/IndexNow',
  'https://www.bing.com/indexnow'
]

async function submitIndexNow() {
  console.log(`[IndexNow] Submitting ${URLS.length} URLs for host: ${HOST}...`)
  console.log(`[IndexNow] Key Location: ${KEY_LOCATION}`)
  console.log('[IndexNow] URLs to submit:')
  URLS.forEach((u) => console.log(`  - ${u}`))

  for (const endpoint of ENDPOINTS) {
    try {
      console.log(`\n[IndexNow] Sending POST request to ${endpoint}...`)
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(payload)
      })

      if (res.status === 200 || res.status === 202) {
        console.log(`[IndexNow] ${endpoint} -> Status ${res.status}: URLs submitted successfully!`)
      } else {
        const text = await res.text()
        console.warn(`[IndexNow] ${endpoint} -> Status ${res.status}: ${text || 'Response received'}`)
      }
    } catch (err) {
      console.error(`[IndexNow] Error submitting to ${endpoint}:`, err.message)
    }
  }
}

submitIndexNow()
