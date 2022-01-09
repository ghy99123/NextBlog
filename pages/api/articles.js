import { urls } from "../../utils/urls"

export async function getArticles() {
  return await fetch(urls.articles)
}

export default async function handler(req, res) {
  const jsonData = await getArticles()
  // res.status(200).json(jsonData)
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(jsonData))
}