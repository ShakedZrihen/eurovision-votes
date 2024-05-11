import "./App.css";
import { BetsButton, SummaryButton, PageContainer, StyledActionsContainer, StyledTitle } from "./App.style";
import { useState } from "react";
import BetsPage from "../Bets";
import SummaryPage from "../Summary";

function App() {
  const [page, setPage] = useState("Bets");
  const SelectedPage = page === "Bets" ? BetsPage : SummaryPage;
  return (
    <>
      <PageContainer>
        <StyledTitle>
          <span>#Eurovision_2024</span> Party
        </StyledTitle>
        <SelectedPage />
        <StyledActionsContainer>
          <BetsButton variant="contained" onClick={() => setPage("Bets")}>
            Bets
          </BetsButton>
          <SummaryButton variant="contained" onClick={() => setPage("Summary")}>
            Bets Summary
          </SummaryButton>
        </StyledActionsContainer>
      </PageContainer>
    </>
  );
}

export default App;
