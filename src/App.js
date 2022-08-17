import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './componet/Header';
import ItemInfo from './pages/ItemInfo';
import ItemInfoCreate from './pages/ItemInfoCreate';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='' element={<ItemInfo></ItemInfo>}></Route>
        <Route path='/infocreate' element={<ItemInfoCreate></ItemInfoCreate>}></Route>
      </Routes>
    </div>
  );
}

export default App;
