import { Route, Routes, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Footer, Header } from "./components";
import { PageWrapper } from "./components/PageWrapper";
import HomePage from "./pages/HomePage";
import MintingPage from "./pages/MintingPage";

import { GlobalStyles, darkTheme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Header />
      <PageWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mint" element={<MintingPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </PageWrapper>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
