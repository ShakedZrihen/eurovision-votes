import "./App.css";
import { BetsButton, BingoButton, PageContainer, StyledActionsContainer, StyledTitle } from "./App.style";
import { useState } from "react";
import BetsPage from "../Bets";
import BingoPage from "../Bingo";


function App() {
  const [page, setPage] = useState("Bets");
  const SelectedPage = page === "Bets" ? BetsPage : BingoPage;
  return (
    <>
      <PageContainer>
        <StyledTitle>
          <span>#Eurovision_2024</span> Party
        </StyledTitle>
        <SelectedPage />
        <StyledActionsContainer>
          <BetsButton variant="contained" onClick={() => setPage("Bets")}>
            Join Bets
          </BetsButton>
          <BingoButton variant="contained" onClick={() => setPage("Bingo")}>
            Join Bingo
          </BingoButton>
        </StyledActionsContainer>
      </PageContainer>
    </>
  );
}

export default App;
