import { Outlet } from 'react-router-dom';
import { Navbar, Footer, Jumbotron } from '../components';


export const Main = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Outlet />
      <Footer />
    </div>
  );
};
