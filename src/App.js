import { BrowserRouter, Routes , Route} from 'react-router-dom';
import './App.css';
import CodeQuality from './components/CodeQuality/CodeQuality';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Landing/>} />
        <Route path={"/code"} element={<CodeQuality/>} />
        <Route path={"/zen"} element={<Header/>} />
        <Route path={"/data"} element={<Header/>} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
