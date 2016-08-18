import { REQUEST_FORM_BY_ID, RECEIVE_FORM_BY_ID_SUCCESS, RECEIVE_FORM_BY_ID_ERROR } from '../constants'
import wfApi from '../api/WFApi';

let wfActionCreators = {
  fetchFormById(id) {
    return (dispatch) => {
      dispatch({ type: REQUEST_FORM_BY_ID });
      wfApi.fetchFormById(id).then(
        (form) => dispatch({ type: RECEIVE_FORM_BY_ID_SUCCESS, success: true, form }),
        (error) => dispatch({ type: RECEIVE_FORM_BY_ID_ERROR, success: false })
      );
    }
  }
};

export default wfActionCreators;
