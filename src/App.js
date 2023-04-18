import { GlobalStyle } from "./GlobalStyles";
import { Selector } from "./components/Selector";
import { StyledSection } from "./GlobalStyles";
import { Input } from "./components/Input";
import { ButtonList } from "./components/ButtonList";
import { ModalList } from "./components/ModalList";

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      {/* Buttons */}
      <section>
        <h2>Buttons</h2>
        <ButtonList />
      </section>

      {/* Input */}
      <h2>Input</h2>
      <Input />

      {/* Modal */}
      <section>
        <h2>Modal</h2>
        <ModalList />
      </section>

      {/* Selector */}
      <h2>Selector</h2>
      <StyledSection>
        <Selector absolute="absolute" />
        <Selector />
      </StyledSection>
    </div>
  );
}

export default App;
