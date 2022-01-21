import request from '@/utils/request'
export const getuserInfo = () => {
  return async (dispatch) => {
    const res = await request.get('user/profile')
    console.log(res)
    dispatch({
      type: 'user/getInfo',
      payload: res.data.data,
    })
  }
}
