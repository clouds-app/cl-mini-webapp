import defaultSetting from '@/config'
 //console.warn("微商城"+defaultSetting.title)
const title = defaultSetting.title || '微商城'

export default function getPagetitle(pageTitle){
    if(pageTitle){
        return  `${pageTitle} - ${title}`
    }
    return  `${title}`
}