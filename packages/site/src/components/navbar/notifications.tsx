import React from 'react';
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  NavLink,
  UncontrolledDropdown,
} from 'reactstrap';

export interface Notification {
  text: string;
  href?: string;
}

export interface NotificationsProps {
  list: Notification[];
}

const Notifications: React.FC<NotificationsProps> = ({
  list,
}: NotificationsProps) => (
  <UncontrolledDropdown nav>
    <DropdownToggle caret color="default" data-toggle="dropdown" nav>
      <div className="notification d-none d-lg-block d-xl-block" />
      <i className="tim-icons icon-sound-wave" />
      <p className="d-lg-none">Notifications</p>
    </DropdownToggle>
    <DropdownMenu className="dropdown-navbar" right tag="ul">
      {list.map(({ text, href }: Notification) => (
        <NavLink tag="li" href={href}>
          <DropdownItem className="nav-item">{text}</DropdownItem>
        </NavLink>
      ))}
    </DropdownMenu>
  </UncontrolledDropdown>
);

export default Notifications;
