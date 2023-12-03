import { configureStore, createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

// const localData = () => {
//   const persistedStateJSON = localStorage.getItem(`persist:contacts`);
//   const persistedState = JSON.parse(persistedStateJSON);
//   return persistedState.contacts;
// };
// console.log(localData());

const contactsSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: [],
    filters: '',
  },
  reducers: {
    contacts: {
      prepare(data) {
        return {
          payload: {
            value: data,
            id: nanoid(),
          },
        };
      },
      reducer(state, action) {
        state.contacts = [...state.contacts, action.payload];
      },
    },
    filters(state, action) {
      state.filters = action.payload;
      state.contacts = action.payload;
    },
  },
});

const phonebookReduser = contactsSlice.reducer;
export const { contacts, filters } = contactsSlice.actions;

const persistedReducer = persistReducer(persistConfig, phonebookReduser);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);