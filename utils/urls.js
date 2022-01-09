
const urlPrefix = process.env.NODE_ENV === 'development' ? 'http://localhost:7003/default/' : 'http://api.ghyyy.top/default/'

export const urls = {
  articles: urlPrefix + 'articles',  //获取所有文章
  article: urlPrefix + 'article/'    //获取单篇文章
}