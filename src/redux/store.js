import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

export const newContact = data => {
  return {
    type: 'phonebook/contacts',
    payload: data,
  };
};

const initialState = {
  contacts: [],
  filters: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'phonebook/contacts':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    default:
      return state;
  }
};

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
