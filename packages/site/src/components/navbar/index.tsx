import {
  Collapse,
  Container,
  Input,
  Modal,
  Nav,
  Navbar,
  NavbarBrand,
} from 'reactstrap';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { selectLoggedIn } from '@state/user';
import { useSelector } from 'react-redux';
import SidebarToggle, { SidebarToggleProps } from './sidebar-toggle';

import LoggedInNavbar from './logged-in-navbar';
import LoggedOutNavbar from './logged-out-navbar';
import NavbarToggle from './navbar-toggle';
import { Notification } from './notifications';
import SearchBar from './search-bar';

export interface NavBarProps extends SidebarToggleProps {
  text: string;
  notifications?: Notification[];
}

const NavBar: React.FC<NavBarProps> = ({
  text,
  notifications,
  ...sideBarToggleProps
}: NavBarProps) => {
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [modalSearch, setModalSearch] = useState(false);
  const [color, setColor] = useState('navbar-transparent');

  const loggedIn = useSelector(selectLoggedIn);

  const toggleCollapse = (): void => {
    if (collapseOpen) {
      setColor('navbar-transparent');
    } else {
      setColor('bg-white');
    }
    setCollapseOpen(!collapseOpen);
  };
  const toggleModalSearch = (): void => {
    setModalSearch(!modalSearch);
  };
  const updateColor = (): void => {
    if (typeof window === 'undefined') {
      return;
    }
    if (window.innerWidth < 993 && collapseOpen) {
      setColor('bg-white');
    } else {
      setColor('navbar-transparent');
    }
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateColor);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', updateColor);
      }
    };
  });
  return (
    <>
      <Navbar className={classNames('navbar-absolute', color)} expand="lg">
        <Container fluid>
          <div className="navbar-wrapper">
            <SidebarToggle {...sideBarToggleProps} />
            <NavbarBrand href="#neon" onClick={e => e.preventDefault()}>
              {text}
            </NavbarBrand>
          </div>
          <NavbarToggle toggleCollapse={toggleCollapse} />
          <Collapse navbar isOpen={collapseOpen}>
            <Nav className="ml-auto" navbar>
              <SearchBar toggleModalSearch={toggleModalSearch} />
              {loggedIn ? (
                <LoggedInNavbar list={notifications || []} />
              ) : (
                <LoggedOutNavbar />
              )}
              <li className="separator d-lg-none" />
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <Modal
        modalClassName="modal-search"
        isOpen={modalSearch}
        toggle={toggleModalSearch}
      >
        <div className="modal-header">
          <Input id="inlineFormInputGroup" placeholder="SEARCH" type="text" />
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={toggleModalSearch}
          >
            <i className="tim-icons icon-simple-remove" />
          </button>
        </div>
      </Modal>
    </>
  );
};

export default NavBar;
