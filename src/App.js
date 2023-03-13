import { BrowserRouter, Routes , Route} from 'react-router-dom';
import styles from "./App.module.css";

import CodeQuality from './components/CodeQuality/CodeQuality';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import Page from './components/Page/Page';
import Zensight from './components/Zensight/Zensight';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Landing/>} />
        <Route path={"/code"} element={<CodeQuality/>} />
        <Route path={"/zen"} element={<Zensight/>} />
        <Route path={"/data"} element={<Page/>} />
        {/* <Route path={"/data"} element={<Header/>} /> */}
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
