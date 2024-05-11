/* eslint-disable react/prop-types */
import { TextField, styled } from "@mui/material";
import { useState } from "react";

const StyledContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
  alignItems: "center",
  "& h4": {
    margin: 0,
  }
});

const StyledRate = styled(TextField)({
  width: "20%",
  margin: "3rem 0",
});

const StyledNotes = styled(TextField)({
  width: "80%",
  margin: "3rem 0",
});

const CountryDescription = ({ name, song, index, artist, flag }) => {
  const [notes, setNotes] = useState("");
  const [rate, setRate] = useState(0);

  return (
    <StyledContainer>
      <h2>
        #{index} {flag} {name}
      </h2>
      <h4>
        {artist} - {song}
      </h4>
      <StyledRate id="rate" value={rate} onChange={e => setRate(e.target.value)} label="rate" type="number" />
      <StyledNotes id="notes" value={notes} onChange={e => setNotes(e.target.value)} label="add notes" multiline maxRows={4} />
    </StyledContainer>
  );
};

export default CountryDescription;
