import { styled } from "@mui/material";
import { useState } from "react";
import CountryDescription from "./components/CountryDescription";

const StyledContentContainer = styled("div")({
  height: "55vh",
  backgroundColor: "#fff"
});

const BetsPage = () => {
  // const [countryIndex, setCountry] = useState(0);

  const updateUserInfo = (notes, rating) => {

  }
  
  return (
    <StyledContentContainer>
      <CountryDescription name={'Israel'} song={'Hurricane'} index={6} artist={'Eden Golan'} flag={'🇮🇱'} />
    </StyledContentContainer>
  );
};

export default BetsPage;
