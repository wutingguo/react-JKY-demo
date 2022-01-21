import { REMOVE_USER_INFO } from '../contents'

export default function user(prevState = {}, action) {
  switch (action.type) {
    case 'user/getInfo':
      return action.payload
    case REMOVE_USER_INFO:
      return {}
    default:
      return prevState
  }
}
