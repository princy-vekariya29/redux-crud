import { createStore, applyMiddleware, compose } from "redux";
import { mainReducer } from "./Services/Reducer/Index";
import createSagaMiddleware from 'redux-saga'
import { watcherCount } from "./Saga";
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage' 
import { persistStore, persistReducer } from 'redux-persist'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'myroot',
    storage,
}


const sagamiddle = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, mainReducer)

const store = createStore(
    persistedReducer
    , composeEnhancers(applyMiddleware(thunk))
    // , composeEnhancers(applyMiddleware(sagamiddle))
)
const persistor = persistStore(store)

// sagamiddle.run(watcherCount);

export{persistor}
export default store;