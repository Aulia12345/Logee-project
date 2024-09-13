import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LayoutComponent from './Komponen/Layout/Layout'; // Import LayoutComponent
import DetailInformasi from './Pages/Detail Informasi/DetailInformasi';

const App = () => {
  return (
    <Router> {/* Pastikan hanya ada satu Router di sini */}
      <LayoutComponent>
        <Routes>
          <Route path="/detail-informasi" element={<DetailInformasi />} />
        </Routes>
      </LayoutComponent>
    </Router>
  );
};

export default App;
