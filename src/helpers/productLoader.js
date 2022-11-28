import axios from "axios";

export async function productLoader(id) {
  const uri = process.env.REACT_APP_API_PRODUCTS_URI;
  const response = await axios.get(`${uri}${id}`);

  return await response.data;
}