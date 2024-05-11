import { styled } from "@mui/material";
import { useState } from "react";
import { CountryDescription } from "./components/CountryDescription";
import SONG_BY_COUNTRY from "../../assets/songList";
import { getUserInfoFromLocalStorage, updateUserInfoLocalStorage } from "../../utils/localstorage";

const StyledContentContainer = styled("div")({
  height: "50vh",
  backgroundColor: "#fff"
});


const BetsPage = () => {
  const [countryIndex, setCountry] = useState(0);
  const [userInfo, setUserInfo] = useState(getUserInfoFromLocalStorage());
  const updateUserInfo = (notes, rating) => {
    setUserInfo((prev) => {
      const updated = [...prev];
      updated[countryIndex].notes = notes;
      updated[countryIndex].givenPoints = rating;
      updateUserInfoLocalStorage(updated);
      return updated;
    });
  };

  const countryData = userInfo[countryIndex];

  const previousCountry =
    countryIndex === 0
      ? null
      : () => {
          setCountry((prev) => prev - 1);
        };

  const nextCountry =
    countryIndex === SONG_BY_COUNTRY.length - 1
      ? null
      : () => {
          setCountry((prev) => prev + 1);
        };

  return (
    <StyledContentContainer>
      <CountryDescription
        name={countryData.name}
        song={countryData.song}
        index={countryIndex + 1}
        artist={countryData.artist}
        flag={countryData.flag}
        notes={countryData.notes}
        rating={countryData.givenPoints}
        updateUserInfo={updateUserInfo}
        nextCountry={nextCountry}
        previousCountry={previousCountry}
      />
    </StyledContentContainer>
  );
};

export default BetsPage;
