//二次封装  api
import request from '../utils/request'
export const reqBannerList=()=>{
    return request('/banner',{type:2})  //资源类型  2是 iphone
}

//为你精心推荐的接口
export const reqRecommend = (limit)=>{
    return request('/personalized',{limit})
}

//排行榜的接口
export const reqRankList = (idx)=>{
    return request ('/top/list',{idx})
}