import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BoardMain from './page/BoardMain';
import BoardDetail from './page/BoardDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BoardMain />} />
        <Route path="/detail" element={<BoardDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
