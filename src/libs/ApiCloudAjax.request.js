import ApiAjax from '@/libs/ApiCloudAjax '
import config from '@/config'
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

let baseUrlOption ={
    baseUrl: baseUrl
}

const axios = new ApiAjax(baseUrlOption)
export default axios
