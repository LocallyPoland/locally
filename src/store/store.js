import AsyncStorage from "@react-native-community/async-storage";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const persistConfig = {
  // Root
  key: "root",
  storage: AsyncStorage,
  whitelist: ["profile", "cards", "places"],
  blacklist: ["base"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

const persistor = persistStore(store);
// Exports
export { store, persistor };
