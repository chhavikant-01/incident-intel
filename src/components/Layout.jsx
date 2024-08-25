import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#000036] via-[#050576] to-[#000036]">
        <Outlet /> 
    </div>
  );
}

export default Layout;
