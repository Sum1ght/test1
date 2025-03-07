// 封装购物车相关接口
import httpinstance from '@/utils/http'

// 加入购物车
export const insertCartAPI = ({ skuId, count }) => {
  return httpinstance({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count
    }
  })
}

// 获取最新的购物车列表
export const findNewCartListAPI = () => {
  return httpinstance({
    url: '/member/cart'
  })
}

// 删除购物车
export const delCartAPI = (ids) => {
  return httpinstance({
    url: '/member/cart',
    method: 'DELETE',
    data: {
      ids
    }
  })
}

// 合并购物车
export const mergeCartAPI = (headers,data) => {
  return httpinstance({
    url: '/member/cart/merge',
    method: 'POST',
    headers,
    data
  })
}