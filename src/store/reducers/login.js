import { GET_TOKEN, REMOVE_TOKEN } from '../contents'

export default function login(prevState = { token: '' }, action) {
  switch (action.type) {
    case GET_TOKEN:
      return action.payload
    case REMOVE_TOKEN:
      return {
        ...prevState,
        token: '',
      }

    default:
      return prevState
  }
}
