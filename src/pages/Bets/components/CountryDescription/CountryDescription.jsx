/* eslint-disable react/prop-types */
import IconButton from "@mui/material/IconButton";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { StyledContainer, StyledNavigationContainer, StyledNotes, StyledRate } from "./CountryDescription.style";
import { Typography } from "@mui/material";

const CountryDescription = ({
  name,
  song,
  index,
  artist,
  flag,
  notes,
  rating,
  updateUserInfo,
  nextCountry,
  previousCountry
}) => {
  return (
    <StyledContainer>
      <h2>
        #{index} {flag} {name}
      </h2>
      <Typography noWrap style={{ width: "250px" }}>
        {artist} - {song}
      </Typography>
      <StyledRate
        id="rate"
        value={rating}
        onChange={(e) => updateUserInfo(notes, e.target.value)}
        label="rate"
        type="number"
      />
      <StyledNotes
        id="notes"
        value={notes}
        onChange={(e) => updateUserInfo(e.target.value, rating)}
        label="add notes"
        multiline
        maxRows={4}
      />
      <StyledNavigationContainer>
        <IconButton variant="text" onClick={previousCountry}>
          {previousCountry && <ArrowBackIosNewIcon />}
        </IconButton>
        {nextCountry && (
          <IconButton variant="text" onClick={nextCountry}>
            <ArrowForwardIosIcon />
          </IconButton>
        )}
      </StyledNavigationContainer>
    </StyledContainer>
  );
};

export default CountryDescription;
