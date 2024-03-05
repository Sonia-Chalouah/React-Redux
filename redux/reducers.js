import { combineReducers } from 'redux'
 import counter from '../redux/slices/counterSlice';
 import events from '../redux/slices/eventsSlice' ; 
 import wishlist from '../redux/slices/wishlistSlices' ;
const reducers = combineReducers({
  counter,
  events,
  wishlist,
})

export default reducers;

