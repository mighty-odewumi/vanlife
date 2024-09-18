// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  getDocs, 
  where, 
  getDoc,
  doc,
  query
} from "firebase/firestore/lite";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgHOiyfCNZhnL65L6fMbhTLcynBSiPACg",
  authDomain: "vanlife-378be.firebaseapp.com",
  projectId: "vanlife-378be",
  storageBucket: "vanlife-378be.appspot.com",
  messagingSenderId: "100728825071",
  appId: "1:100728825071:web:c50ff2d52e5f1eafd4671a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef = collection(db, "vans");


export async function getVans() {
  const querySnapshot = await getDocs(vansCollectionRef);
  const dataArr = querySnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }));
  console.log(dataArr);
  return dataArr;
}

export async function getVanById(id) {
  const docRef = doc(db, "vans", id);
  const vanSnapshot = await getDoc(docRef);
  return {
    ...vanSnapshot.data(),
    id: vanSnapshot.id
  }
}

export async function getHostVans() {
  const q = query(vansCollectionRef, where("hostId", "==", "123"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }));
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
