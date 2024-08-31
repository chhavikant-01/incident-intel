import { configureStore, combineReducers } from '@reduxjs/toolkit';
import postsReducer from './posts/postSlice';
import { persistStore } from 'redux-persist';



// Combine reducers with posts excluded from persistence
const rootReducer = combineReducers({
  posts: postsReducer, // Posts are not persisted
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
