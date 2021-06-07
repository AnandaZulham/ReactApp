import { useState, useEffect} from 'react';
import {
    AppWrapper,
    AppHeader,
    AppLogo,
    AppText,
    AppLink,
    Button
} from './Component/Styled_Component/style'

function App() {
  const [count,setCount] = useState(0)
  const Log = () => console.log(`counter ke 1 : ${count}`)
  useEffect(Log)
  return (
    <div className="App">
      <h1> Tanpa styled Compoent </h1>
      <h2> Counter {count} </h2>
      <Button onClick={() => setCount(count + 1)}>Tambah </Button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
      <h1> Menggunakan styled Component </h1>
      <AppWrapper>
        <AppHeader>
            <AppLogo src={logo} alt="logo">
            </AppLogo>
            <AppText> Edit <code>src/App.js</code> and save to reload. </AppText>
            <AppLink href="reactjs.org" target="_blank" color="primary">
                Learn React
            </AppLink>
        </AppHeader>
      </AppWrapper>
    </div> 
  );
}

export default App;
