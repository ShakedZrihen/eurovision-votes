import SONG_BY_COUNTRY from "../assets/songList";

export const getUserInfoFromLocalStorage = () => {
    const value = localStorage.getItem("userInfo");
    if (value) {
      return JSON.parse(value);
    }
    return SONG_BY_COUNTRY;
  };
  
  export const updateUserInfoLocalStorage = (newValue) => {
    localStorage.setItem("userInfo", JSON.stringify(newValue));
  };