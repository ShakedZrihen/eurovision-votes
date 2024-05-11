import { styled } from "@mui/material";
import { useState } from "react";

const StyledContentContainer = styled("div")({
  height: "55vh",
  backgroundColor: "#fff"
});


const BetsPage = () => {
  const [countryIndex, setCountry] = useState(0);
  return <StyledContentContainer>Bets</StyledContentContainer>;
};

export default BetsPage;
