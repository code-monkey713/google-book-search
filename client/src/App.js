import './App.css';
import { Main } from './layouts/Main';
import { Saved, Search } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<Search />} />
          <Route path="/saved" element={<Saved />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
