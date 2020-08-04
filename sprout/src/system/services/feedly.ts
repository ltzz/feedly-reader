import { accessToken, userId } from './dev/secret'
import { getJson } from './http/apiClient'

const baseUrl = 'https://cloud.feedly.com'

const getFeedlyStream = async () => {
  const streamId = encodeURI(`user/${userId}/category/global.all`)
  const url = `/v3/streams/contents?streamId=${streamId}&unreadOnly=true&count=200`
  const res = await getJson(baseUrl, url, accessToken)
  return res
}

export {
  getFeedlyStream
}
