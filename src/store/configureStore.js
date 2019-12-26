import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'

//local storage
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['loginstatus'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
//End local storage

export default (history, initialState) => {
  const middlewares = [thunk, apiMiddleware, routerMiddleware(history)]

  if(process.env.NODE_ENV !== 'production')
    middlewares.push(createLogger())

/*Old Before Add loacl storage
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  )

  return store

  */

//New Add loacl storage
const pReducer = persistReducer(persistConfig,
  rootReducer,
  initialState,
)

const store = createStore(pReducer,applyMiddleware(...middlewares));
const persistor = persistStore(store);

return { store, persistor }
//End New Add loacl storage
}
