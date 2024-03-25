import { Outlet } from 'react-router-dom';
import MainWrapper from './styled';
import Header from '../../Widgets/Header/Header';
import Footer from '../../Widgets/Footer/footer';

function Layout() {
  return (
    <MainWrapper>
      <Header />
      <Outlet />
      <Footer />
    </MainWrapper>
  );
}

export default Layout;
