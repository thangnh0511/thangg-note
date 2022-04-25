import logo from './logo.svg';
import './App.css';
import MainLayout from './components/MainLayout/MainLayout';
import { HeaderBox } from './components/MainLayout/Header';
import pkg from 'semantic-ui-react/package.json'
import Main from './components/MainLayout/MainContent/Main';

// https://mui.com/getting-started/installation/

// https://react.semantic-ui.com/

// https://atomizecode.com/

// --legacy-peer-deps
// --force

function App() {
  return (
    <div className="App">
        <MainLayout/>
    </div>
  );
}

export default App;
