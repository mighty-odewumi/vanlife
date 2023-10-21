import axios from "axios";

export async function fetchData() {
  try {
    const req = await axios.get("/api/vans")
    const response = req;
    return response.data.vans;
  }
  catch (error) {
    console.log(error);
    throw {
      message: error.message,
      status: error.response.status,
      statusText: error.response.statusText,
    } 
  }
}
