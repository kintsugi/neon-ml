/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import PerfectScrollbar from 'perfect-scrollbar';
import React, { useEffect, useRef, useState } from 'react';

import routes from '../config/routes';
import logo from '../images/favicon.png';
import Sidebar from './creative-ui/Sidebar/Sidebar';
import Footer from './footer';
import Navbar from './navbar';
import RightSettingsMenu from './RightSettingsMenu';
import SidebarMini from './sidebar-mini';

let ps = null;

export interface LayoutProps {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: any;
}

const getRouteText = (): string => {
  let text = 'Home';
  routes.some(route => {
    if (
      typeof windows !== 'undefined' &&
      window.location.pathname === route.path
    ) {
      text = route.name;
      return true;
    }
    return false;
  });
  return text;
};

const Layout: React.FC<LayoutProps> = ({ children, location }: LayoutProps) => {
  const [sidebarOpened, setSidebarOpen] = useState(false);
  const [sidebarMinimized, setSidebarMinimized] = useState(true);
  const [opacity, setOpacity] = useState(0);
  const mainPanel = useRef(null);

  const closeSidebar = (): void => {
    setSidebarOpen(false);
    document.documentElement.classList.remove('nav-open');
  };
  const toggleSidebar = (): void => {
    setSidebarOpen(!sidebarOpened);
    document.documentElement.classList.toggle('nav-open');
  };

  const onMinimizeClick = (): void => {
    if (document.body.classList.contains('sidebar-mini')) {
      setSidebarMinimized(false);
    } else {
      setSidebarMinimized(true);
    }
    document.body.classList.toggle('sidebar-mini');
  };

  const showNavbarButton = (): void => {
    if (
      document.documentElement.scrollTop > 50 ||
      document.scrollingElement.scrollTop > 50 ||
      mainPanel.scrollTop > 50
    ) {
      setOpacity(1);
    } else if (
      document.documentElement.scrollTop <= 50 ||
      document.scrollingElement.scrollTop <= 50 ||
      mainPanel.scrollTop <= 50
    ) {
      setOpacity(0);
    }
  };

  useEffect(() => {
    if (navigator.platform.indexOf('Win') > -1) {
      document.documentElement.className += ' perfect-scrollbar-on';
      document.documentElement.classList.remove('perfect-scrollbar-off');
      ps = new PerfectScrollbar(mainPanel);
      const tables = document.querySelectorAll('.table-responsive');
      for (let i = 0; i < tables.length; i += 1) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    window.addEventListener('scroll', showNavbarButton);
    return () => {
      if (navigator.platform.indexOf('Win') > -1) {
        ps.destroy();
        document.documentElement.className += ' perfect-scrollbar-off';
        document.documentElement.classList.remove('perfect-scrollbar-on');
      }
      window.removeEventListener('scroll', showNavbarButton);
    };
  });

  return (
    <>
      <div className="wrapper">
        <SidebarMini opacity={opacity} onMinimizeClick={onMinimizeClick} />
        <Sidebar
          routes={routes}
          location={location}
          logo={{
            innerLink: '/',
            imgSrc: logo,
            text: 'Neon',
          }}
          closeSidebar={closeSidebar}
        ></Sidebar>
        <div className="main-panel" ref={mainPanel}>
          <Navbar
            onMinimizeClick={onMinimizeClick}
            sidebarOpened={sidebarOpened}
            toggleSidebar={toggleSidebar}
            text={getRouteText()}
          />
          {children}
        </div>
        <RightSettingsMenu
          sidebarMinimized={sidebarMinimized}
          onMinimizeClick={onMinimizeClick}
        />
        <Footer fluid />
      </div>
    </>
  );
};

export default Layout;
