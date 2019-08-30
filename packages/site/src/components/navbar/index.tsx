import photo from '@images/favicon.png';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import {
  Button,
  Collapse,
  Container,
  DropdownItem,
  DropdownMenu,
  Input,
  InputGroup,
  Modal,
  Nav,
  NavLink,
  Navbar,
  NavbarBrand,
  UncontrolledDropdown,
} from 'reactstrap';

import NavbarToggle from './navbar-toggle';
import Notifications, { Notification } from './notifications';
import ProfilePic from './profile-pic';
import SidebarToggle, { SidebarToggleProps } from './sidebar-toggle';

interface SearchBarProps {
  toggleModalSearch: () => void;
}
const SearchBar: React.FC<SearchBarProps> = ({
  toggleModalSearch,
}: SearchBarProps) => (
  <InputGroup className="search-bar" tag="li">
    <Button
      color="link"
      data-target="#searchModal"
      data-toggle="modal"
      id="search-button"
      onClick={toggleModalSearch}
    >
      <i className="tim-icons icon-zoom-split" />
      <span className="d-lg-none d-md-block">Search</span>
    </Button>
  </InputGroup>
);

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
              <Notifications list={notifications || []} />
              <UncontrolledDropdown nav>
                <ProfilePic src={photo}>
                  <b className="caret d-none d-lg-block d-xl-block" />
                  <p className="d-lg-none">Account</p>
                </ProfilePic>

                <DropdownMenu className="dropdown-navbar" right tag="ul">
                  <NavLink tag="li" href="/profile">
                    <DropdownItem className="nav-item">Profile</DropdownItem>
                  </NavLink>
                  <NavLink tag="li" href="/settings">
                    <DropdownItem className="nav-item">Settings</DropdownItem>
                  </NavLink>
                  <DropdownItem divider tag="li" href="/logout" />
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">Log out</DropdownItem>
                  </NavLink>
                </DropdownMenu>
              </UncontrolledDropdown>
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
