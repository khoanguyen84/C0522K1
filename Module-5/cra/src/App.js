import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import VietNam from './components/VietNam/VietNam';
import BookDetail from './components/Book/BookDetail';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/vietnam' element={<VietNam />} />
        <Route path='/book/:catid/:bookid' element={<BookDetail />} />
      </Routes>
    </>
  );
}

export default App;
