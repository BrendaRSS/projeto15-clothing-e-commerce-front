import axios from "axios";

export async function signInSubmit(request, dispatch) {
  dispatch({ type: 'AWAIT_RESPONSE' });

  try {
    const response = await axios.post(request.url, request.data);
    const userData = JSON.stringify({
      _id: await response.data.userExist._id,
      token: await response.data.token
    });
    localStorage.setItem('lilium-cache', userData);
    
    dispatch({ type: 'RESPONSE_RESOLVED' });
  } catch (e) {
    dispatch({ type: 'RESPONSE_RESOLVED' });
    console.error(e);
  }
}