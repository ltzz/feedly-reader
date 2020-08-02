import axiosBase from 'axios'
import { accessToken, userId } from '../dev/secret'

const baseUrl = 'https://cloud.feedly.com'

const getJson = async (url: string) => {
  const streamId = encodeURI(`user/${userId}/category/global.all`)
  const axios = axiosBase.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + accessToken
    }
  })
  const res = await axios.get(`/v3/streams/contents?streamId=${streamId}`)
  return res
}

export {
  getJson
}
  