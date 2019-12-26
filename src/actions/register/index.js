
import axios from 'axios';

export const SubmitRegister = (formdata) => {
  return (dispatch) => {
    return axios.post(`http://api.yournextu.com/api/YNU/register`, formdata)
      .then(response => {
        dispatch(RegisterSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const RegisterSuccess =  (data) => {
  return {
    type: 'New_Register_SUCCESS',
    payload: data
  }
};
