import { BrowserRouter, Routes, Route } from 'react-router';

import { RootLayout, ProtectedLayout } from '@/components/layouts';
import { Dashboard, Login, Analytics } from '@/pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path='login' element={<Login />} />
          <Route element={<ProtectedLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='analytics' element={<Analytics />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
