import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  NavLink,
  UncontrolledDropdown,
} from 'reactstrap';

import React from 'react';

export interface Notification {
  text: string;
  href?: string;
}

export interface NotificationsProps {
  list: Notification[];
}

const NotificationList: React.FC<NotificationsProps> = ({
  list,
}: NotificationsProps) => {
  if (!list.length) {
    return <DropdownItem className="nav-item">No Notifications</DropdownItem>;
  }
  return (
    <span>
      {list.map(({ text, href }: Notification) => {
        return (
          <NavLink tag="li" href={href}>
            <DropdownItem className="nav-item">{text}</DropdownItem>
          </NavLink>
        );
      })}
    </span>
  );
};

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
      <NotificationList list={list} />
    </DropdownMenu>
  </UncontrolledDropdown>
);

export default Notifications;
