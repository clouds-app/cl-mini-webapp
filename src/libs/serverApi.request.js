import HttpRequest from '@/libs/axios'
import config from '@/config'
const baseUrl = process.env.NODE_ENV === 'development' ? config.serverPath.dev : config.serverPath.pro
const axios = new HttpRequest(baseUrl)
export default axios
