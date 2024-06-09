import './App.css';
import AddStudent from './components/AddStudent';
import Search from './components/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Delete from './components/Delete';
import ViewStudent from './components/ViewStudent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddStudent/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/delete' element={<Delete/>}/>
        <Route path='/viewstudent' element={<ViewStudent/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
