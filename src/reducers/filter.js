import { CHANGE_FILTER } from '../actions';

const filterReducer = (state = 'All', {type, payload}) => {
  if (type === (CHANGE_FILTER)) {
    return payload;
  }
  return state;
};

export default filterReducer;
