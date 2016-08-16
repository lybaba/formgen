import { RECEIVE_FORM_BY_ID_SUCCESS } from '../constants';

const initialState = {
  id: '',
  name: '',
  description: ''
};

const form = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_FORM_BY_ID_SUCCESS:
      console.log("Toto......");
      return action.form.wfc;
    default:
      return state;
  }
};

export default form;
