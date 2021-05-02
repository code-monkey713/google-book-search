import './App.css';
import { Main } from './layouts/Main';
import { Save, Search } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<Save />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
