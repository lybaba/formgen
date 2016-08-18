import { RECEIVE_FORM_BY_ID_SUCCESS } from '../constants';

const initialState = {
  id: '',
  name: '',
  description: ''
};

const form = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_FORM_BY_ID_SUCCESS:
      if (Object.keys(action.form).length === 0) {
        return state;
      } else {
        return action.form.wfc;
      }
    default:
      return state;
  }
};

export default form;
