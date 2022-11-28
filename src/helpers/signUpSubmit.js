import axios from "axios";

export async function signUpSubmit(request, dispatch) {
  dispatch({ type: 'AWAIT_RESPONSE' });

  try {
    await axios.post(request.url, request.data);
    dispatch({ type: 'RESPONSE_RESOLVED' });
  } catch (e) {
    dispatch({ type: 'RESPONSE_RESOLVED' });
    console.error(e);
  }
}