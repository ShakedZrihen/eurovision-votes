import { Button, styled } from "@mui/material";

export const StyledTitle = styled("p")({
  color: "white",
  textAlign: "left",
  fontWeight: "bold",
  fontSize: "large",
  margin: 0,
  height: '6vh',
  "& span": {
    fontWeight: "bolder",
    backgroundColor: "#9C27B0",
    padding: "0.25rem"
  }
});

export const PageContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "85vh"
});

export const StyledButton = styled(Button)({
  backgroundColor: "white",
  color: "#05025e",
  marginBottom: "1rem"
});

export const BingoButton = styled(StyledButton)({
  backgroundColor: "#23ffd6",
  color: "#05025e"
});

export const BetsButton = styled(StyledButton)({
  backgroundColor: "#effe07",
  color: "#05025e"
});

export const StyledActionsContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: '20vh',
});
