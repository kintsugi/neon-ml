/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useRef, useState } from 'react';
import { changeThemeMode, selectThemeMode } from '@state/theme';
import { useDispatch, useSelector } from 'react-redux';

import PerfectScrollbar from 'perfect-scrollbar';
import Footer from './footer';
import Navbar from './navbar';
// Components
// Redux
import RightSettingsMenu from './RightSettingsMenu';
// eslint-disable-next-line import/no-unresolved
import Sidebar from './creative-ui/Sidebar';
import SidebarMini from './sidebar-mini';
// Images
import logo from '../images/favicon.png';
// Routes config file for navbar
import routes from '../config/routes';

let ps: PerfectScrollbar;

const getRouteText = (): string => {
  let text = 'Home';
  routes.some(route => {
    if (
      typeof window !== 'undefined' &&
      window.location.pathname === route.path
    ) {
      text = route.name;
      return true;
    }
    return false;
  });
  return text;
};

export interface LayoutProps {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: any;
}

const Layout: React.FC<LayoutProps> = ({ children, location }: LayoutProps) => {
  const dispatch = useDispatch();
  const [sidebarOpened, setSidebarOpen] = useState(false);
  const [sidebarMinimized, setSidebarMinimized] = useState(true);
  const [opacity, setOpacity] = useState(0);
  const mainPanel = useRef<HTMLDivElement>(null);

  const themeMode = useSelector(selectThemeMode);

  const closeSidebar = (): void => {
    setSidebarOpen(false);
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('nav-open');
    }
  };
  const toggleSidebar = (): void => {
    setSidebarOpen(!sidebarOpened);
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('nav-open');
    }
  };

  const onMinimizeClick = (): void => {
    if (typeof document !== 'undefined') {
      if (document.body.classList.contains('sidebar-mini')) {
        setSidebarMinimized(false);
      } else {
        setSidebarMinimized(true);
      }
      document.body.classList.toggle('sidebar-mini');
    }
  };

  const onModeChange = (mode: string): void => {
    dispatch(changeThemeMode(mode));
  };

  const showNavbarButton = (): void => {
    if (typeof document === 'undefined') {
      return;
    }

    if (document.scrollingElement === null || mainPanel.current === null) {
      return;
    }
    if (
      document.documentElement.scrollTop > 50 ||
      document.scrollingElement.scrollTop > 50 ||
      mainPanel.current.scrollTop > 50
    ) {
      setOpacity(1);
    } else if (
      document.documentElement.scrollTop <= 50 ||
      document.scrollingElement.scrollTop <= 50 ||
      mainPanel.current.scrollTop <= 50
    ) {
      setOpacity(0);
    }
  };

  useEffect(() => {
    if (
      typeof document !== 'undefined' &&
      typeof navigator !== 'undefined' &&
      navigator.platform.indexOf('Win') > -1
    ) {
      document.documentElement.className += ' perfect-scrollbar-on';
      document.documentElement.classList.remove('perfect-scrollbar-off');
      ps = new PerfectScrollbar(mainPanel.current as HTMLElement);
      const tables = document.querySelectorAll('.table-responsive');
      for (let i = 0; i < tables.length; i += 1) {
        ps = new PerfectScrollbar(tables[i] as HTMLElement);
      }
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', showNavbarButton);
    }
    return () => {
      if (
        typeof document !== 'undefined' &&
        navigator.platform.indexOf('Win') > -1
      ) {
        ps.destroy();
        document.documentElement.className += ' perfect-scrollbar-off';
        document.documentElement.classList.remove('perfect-scrollbar-on');
      }
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', showNavbarButton);
      }
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

        <Footer fluid />
      </div>
    </>
  );
};

export default Layout;
