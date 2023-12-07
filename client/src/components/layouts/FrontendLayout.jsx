import { Outlet } from 'react-router-dom';
// import { lazy } from 'react';
// import React from 'react';

const FrontendLayout = () => {
  return (
    <div>
      <div>this is navbar</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default FrontendLayout;
