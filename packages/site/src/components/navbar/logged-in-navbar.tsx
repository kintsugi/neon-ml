import {
  DropdownItem,
  DropdownMenu,
  NavLink,
  UncontrolledDropdown,
} from 'reactstrap';

import { Link } from 'gatsby';
import React from 'react';
import photo from '@images/favicon.png';
import ProfilePic from './profile-pic';
import Notifications, { NotificationsProps } from './notifications';

const LoggedInNavbar: React.FC<NotificationsProps> = ({
  list,
}: NotificationsProps) => (
  <>
    <Notifications list={list} />
    <UncontrolledDropdown nav>
      <ProfilePic src={photo}>
        <b className="caret d-none d-lg-block d-xl-block" />
        <p className="d-lg-none">Account</p>
      </ProfilePic>

      <DropdownMenu className="dropdown-navbar" right tag="ul">
        <NavLink tag="li">
          <Link to="/profile">
            <DropdownItem className="nav-item">Profile</DropdownItem>
          </Link>
        </NavLink>
        <NavLink tag="li">
          <Link to="/settings">
            <DropdownItem className="nav-item">Settings</DropdownItem>
          </Link>
        </NavLink>
        <NavLink tag="li">
          <Link to="/logout">
            <DropdownItem className="nav-item">Log out</DropdownItem>
          </Link>
        </NavLink>
      </DropdownMenu>
    </UncontrolledDropdown>
  </>
);

export default LoggedInNavbar;
