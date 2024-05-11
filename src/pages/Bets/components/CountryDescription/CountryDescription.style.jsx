import { TextField, styled } from "@mui/material";

export const StyledContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  "& h4": {
    margin: 0
  }
});

export const StyledRate = styled(TextField)({
  width: "20%"
});

export const StyledNotes = styled(TextField)({
  width: "80%"
});

export const StyledNavigationContainer = styled("div")({
  display: "flex",
  marginBottom: "1rem",
  justifyContent: "space-between",
  width: "80%"
});
