import { Route, Routes } from 'react-router-dom';
import './App.css';
import Insert from './component/Insert';
import Display from './component/Display';
import Edit from './component/Edit';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route exact path='/' element={<Display />} ></Route>
      <Route exact path='/Insert' element={<Insert />} ></Route>
      <Route exact path='/edit' element={<Edit />} ></Route>
    </Routes>
    </div>
  );
}

export default App;
