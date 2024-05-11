import { styled } from "@mui/material";
import { getUserInfoFromLocalStorage } from "../../utils/localstorage";

const StyledContentContainer = styled("div")({
  height: "55vh",
  backgroundColor: "#fff",
  overflowY: "auto"
});

const StyledCountryVoteContainer = styled("div")((props) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "1rem",
  backgroundColor: props.winner ? "#effe07" : "white"
}));

const SummaryPage = () => {
  const data = getUserInfoFromLocalStorage();
  return (
    <StyledContentContainer>
      {data
        .sort((a, b) => b.givenPoints - a.givenPoints)
        .map((country, index) => {
          const winner = index === 0;
          return (
            <StyledCountryVoteContainer key={country.name} winner={winner}>
              <div>
                {index + 1}. {country.name} - {country.song} {winner && "🏆"}
              </div>
              <div>{country.givenPoints}</div>
            </StyledCountryVoteContainer>
          );
        })}
    </StyledContentContainer>
  );
};

export default SummaryPage;
