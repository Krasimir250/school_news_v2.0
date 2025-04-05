import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDz4OTCMK8Ks02Q5Ra-7OeRxRLMVJ0_tZw",
  authDomain: "schoolnews-5efa3.firebaseapp.com",
  projectId: "schoolnews-5efa3",
  storageBucket: "schoolnews-5efa3.appspot.com",
  messagingSenderId: "846433678875",
  appId: "1:846433678875:web:8e7fd8ed199e57c91ceabe",
  measurementId: "G-YKXBZF15LG",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE = getStorage(FIREBASE_APP, firebaseConfig.storageBucket);

export const getTest = async () => {
  const testDoc = await getDoc(doc(FIREBASE_DB, "testing", "test1"));
  const testArr = [];

  return testArr;
};

getTest();

// export const getSchools = async (cityId) => {
//   const q = query(
//     collection(FIREBASE_DB, "schools"),
//     and(where("cityId", "==", cityId))
//   );

//   const schoolsData = await getDocs(q);
//   const schools = [];

//   schoolsData.forEach((doc) => {
//     schools.push(doc.data());
//   });

//   return schools.sort((a, b) => a.name.localeCompare(b.name));
// };

// export const getNews = async (schoolId, shouldFetchWaiting) => {
//   const newsQuery = query(
//     collection(FIREBASE_DB, "news"),
//     where("schoolId", "==", schoolId),
//     where("isWaiting", "==", false)
//   );

//   const waitingNewsQuery = query(
//     collection(FIREBASE_DB, "news"),
//     where("schoolId", "==", schoolId),
//     where("isWaiting", "==", true)
//   );

//   const newsData = await getDocs(
//     shouldFetchWaiting ? waitingNewsQuery : newsQuery
//   );

//   const news = [];

//   newsData.forEach((doc) => {
//     news.push({ data: doc.data(), id: doc.id });
//   });

//   return news;
// };

// export const getUser = async (uid) => {
//   const q = query(
//     collection(FIREBASE_DB, "users"),
//     and(where("uid", "==", uid))
//   );

//   const userData = await getDocs(q);
//   const user = [];

//   userData.forEach((doc) => {
//     user.push(doc.data());
//   });

//   return user[0];
// };

// export const registerUser = async (data) => {
//   try {
//     await addDoc(collection(FIREBASE_DB, "users"), data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const createNew = async (data) => {
//   try {
//     await addDoc(collection(FIREBASE_DB, "news"), data);
//   } catch (error) {}
// };
