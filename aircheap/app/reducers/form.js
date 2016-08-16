import { RECEIVE_FORM_BY_ID } from '../constants';

const initialState = {
  id: '',
  name: '',
  description: ''
};

const form = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_FORM_BY_ID:
      return action.form;
    default:
      return state;
  }
};

export default form;
