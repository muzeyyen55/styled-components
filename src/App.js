import { StyledButton } from "./components/Button.style";
import { AppContainer } from "./components/Container.style";
import { GlobalStyles } from "./GlobalStyles.style";

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <StyledButton
        buttonLabel="Click Here"
        backgroundColor="violet"
      ></StyledButton>
    </AppContainer>
  );
}

export default App;
