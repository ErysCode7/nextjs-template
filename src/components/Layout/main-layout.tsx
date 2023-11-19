import React, { ReactNode } from 'react';

import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('../navbar/nav-bar'));
const Footer = dynamic(() => import('../footer/footer'));

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <React.Fragment>
      {/* HEADER OR NAVBAR */}
      <Navbar />

      {/* MAIN PAGE */}
      <main>{children}</main>

      {/* FOOTER */}
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;
