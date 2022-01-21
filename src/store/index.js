import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import { getToken } from '@/utils/storage'

const middlewares = composeWithDevTools(applyMiddleware(thunk))
const store = createStore(
  rootReducer,
  {
    login: {
      token: getToken(),
    },
  },
  middlewares
)

export default store
