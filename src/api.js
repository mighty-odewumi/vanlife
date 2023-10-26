import axios from "axios";


export async function getVans(id) {

  const url = id ? `/api/vans/${id}` : "/api/vans";

  try {
    const req = await axios.get(url)
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

export async function getHostVans(id) {
  
  const url = id ? `/api/host/vans/${id}` : "/api/host/vans";

  try {
    const req = await axios.get(url)
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

export async function loginUser(creds) {
  try {
    const req = await axios.post("/api/login", {
      method: "post", 
      body: JSON.stringify(creds)
    });
    
    const response = req;
    console.log(response.data);

    return response;

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
