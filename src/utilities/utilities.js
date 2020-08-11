import axios from "axios";
import {degNumIndex} from '../components/Wheel/Wheel.js'

console.log(degNumIndex);

export const getData = () => {
  const responseEnglish = axios.get(`http://localhost:5000/${degNumIndex}`);
  return responseEnglish;
};
