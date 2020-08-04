import axiosBase from 'axios'

const getJson = async (baseUrl: string, url: string, accessToken: string) => {
  const axios = axiosBase.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + accessToken
    }
  })
  const res = await axios.get(url)
  return res
}

export {
  getJson
}
  