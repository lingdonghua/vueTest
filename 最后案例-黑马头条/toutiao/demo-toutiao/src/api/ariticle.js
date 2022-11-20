// 封装获取列表的api
import request from '@/utils/request'
// 按需导出
export const getArticleListAPI = function (_page, _limit) {
  return request.get('/articles', {
    // 请求的参数
    params: { _page, _limit }
  })
}
