import './App.css';
import Button from './components/Button';
import { StyledButton, ComponentButton } from './components/Button.style';
import { Wrapper } from './components/Wrapper.style';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <StyledButton background={'red'}>Teste</StyledButton>
        <a href="#">Clique aqui</a>
        <ComponentButton text={'Componente'}/>
        <StyledButton>Teste de estilização temática</StyledButton>
      </Wrapper>
    </div>
  );
}

export default App;
