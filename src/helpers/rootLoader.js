import axios from "axios";

export async function rootLoader() {
  const uri = process.env.REACT_APP_API_CATEGORIES_URI;
  const response = await axios.get(uri);
  const newData = await response.data;
  const categories = [];
  newData.forEach(object => {
    categories.push(object.category);
  })

  return categories;
}