import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import danhSachSanPhamReducer  from 'containers/clients/ProductList/module/reducer'
import ticketReducer from 'containers/clients/showTicket/module/reducer';
import brandReducer from 'components/Banner/module/reducer';
import productInfoReducer from 'containers/clients/ProductDetail/module/reducer';
import cartReducer from 'containers/clients/Cart/module/reducer';

const rootReducer = combineReducers({
    danhSachSanPhamReducer,
    ticketReducer,
    brandReducer,
    productInfoReducer,
    cartReducer
})

const persistConfig = {
    key: "root",
    storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store)

export { store, persistor };