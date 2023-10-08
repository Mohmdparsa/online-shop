import axios from "axios";

const gaUrl = "http://localhost:9000"

//@desc get GAGoods
//@route get http://localhost:9000/goods
export const  GAGoods = ()=>{
    const url = `${gaUrl}/goods`
    return axios.get(url)
} 
//@desc get GAGoods with ID
//@route get http://localhost:9000/goods/goodsId
export const GAGood = (goodsId)=>{
    const url = `${gaUrl}/goods/${goodsId}`
    return axios.get(url)
}
//@desc get GAGroups 
//@route get http://localhost:9000/groups
export const GAGroups = ()=>{
    const url = `${gaUrl}/groups`
    return axios.get(url)
}
//@desc get GAGroup with ID
//@route get http://localhost:9000/groups/groupId

export const GAGroup =(groupId)=>{
    const url = `${gaUrl}/groups/${groupId}`
    return axios.get(url)
}