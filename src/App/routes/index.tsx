import { Route, Routes } from 'react-router-dom';
import { page } from '../../Shared/Constants/navigation';
import Layout from '../../Pages/Layout';
import HomePage from '../../Pages/homePage/homePage';

function AppRoutes() {
  return (
    <Routes>
      <Route path={page.mainPage} element={<Layout />}>
        <Route path={page.mainPage} element={<HomePage />} />
        <Route path={page.mainPage} element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
