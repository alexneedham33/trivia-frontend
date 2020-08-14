import axios from "axios";
import { degNumIndex } from "../components/Wheel/Wheel.js";

console.log(degNumIndex);

export const getData = () => {
  const responseEnglish = axios.get(
    `${process.env.REACT_APP_API_URL}/${degNumIndex}`
  );
  console.log("api url", process.env.REACT_APP_API_URL);
  return responseEnglish;
};
