import alova from "./index";

export const randomImgApi = () => {
  return alova.Get("https://dog.ceo/api/breed/pembroke/images/random");
};
