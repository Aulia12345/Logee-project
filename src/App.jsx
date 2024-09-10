import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LayoutComponent from './Komponen/Layout/Layout'; // Import LayoutComponent
import Katalog from './Komponen/Form/Form Katalog/Katalog'; // Halaman Katalog
import Tes from './Pages/Tes/Tes'; // Halaman Tes

const App = () => {
  return (
    <Router> {/* Pastikan hanya ada satu Router di sini */}
      <LayoutComponent>
        <Routes>
          <Route path="/tes" element={<Tes />} />
        </Routes>
      </LayoutComponent>
    </Router>
  );
};

export default App;
