import axios from "axios";

export const getData = (degNumIndex) => {
  const responseEnglish = axios.get(
    `${process.env.REACT_APP_API_URL}/${degNumIndex}/`
  );
  return responseEnglish;
};
