import request from '@/utils/request'
import { removeToken, setToken } from '@/utils/storage'
import { GET_TOKEN, REMOVE_TOKEN, REMOVE_USER_INFO } from '../contents'
export const loginGetToken = (data) => {
  return async (dispatch) => {
    const res = await request.post('authorizations', data)
    console.log(res)
    const token = res.data.data.token
    setToken(token)
    dispatch({
      type: GET_TOKEN,
      payload: token,
    })
  }
}
export const loginOut = () => {
  return (dispatch) => {
    removeToken()
    dispatch({
      type: REMOVE_TOKEN,
    })
    dispatch({
      type: REMOVE_USER_INFO,
    })
  }
}
