import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getDatabase,
  ref,
  query,
  get,
  startAt,
  endAt,
  limitToFirst,
  orderByChild,
} from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase(app);


export async function getData(path = "/", idx = 0, filter = {}) {
  const { brand: b, color } = filter;
  let limit = 20;
  const dbref = ref(db, path);
  try {
    let val = (await get(dbref)).val();
    let res = [];
    if (typeof val == "object") {
      for (let key of Object.keys(val)) {
        res.push(val[key]);
      }
    }

    let data = res
      .filter(
        ({ brand, dominant_color }) =>
          brand.toLowerCase().includes(b.toLowerCase()) && dominant_color.toLowerCase().includes(color.toLowerCase())
      )
      .slice(idx * limit, limit * (idx + 1));
    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function searchItem(search){
  const dbref = ref(db, "/")
    return (await get(query(dbref,orderByChild("body"),startAt(search) ,endAt(search+ "\uf8ff"),limitToFirst(20)))).val()
}
export default db;
export { app, auth};