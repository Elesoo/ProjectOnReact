import {createStore, combineReducers} from 'redux'

import { reducer as formReducer } from 'redux-form'
import ggalleryReducer from './Reducer/galleryReducer';
import authReducer from './Reducer/authReducer';

let reducers = combineReducers({
  galleryPage: ggalleryReducer,
  auth: authReducer,
  form: formReducer
});

let store = createStore(reducers);

window.store = store;



export default store;