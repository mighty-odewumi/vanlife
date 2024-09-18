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
  const res = await fetch("/api/login",
      { method: "post", body: JSON.stringify(creds) }
  );
  const data = await res.json();

  if (!res.ok) {
      throw {
          message: data.message,
          statusText: res.statusText,
          status: res.status
      }
  }

  return data;
} 


// Stopped using this because I discovered Axios isn't working with 
// Mirage in all environments except if one downgrades Mirage to an older version.

// https://github.com/miragejs/miragejs/issues/1005

/* export async function loginUser(creds) {
  console.log(creds);

  try {
    const req = await axios.post("/api/login", {
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
} */
