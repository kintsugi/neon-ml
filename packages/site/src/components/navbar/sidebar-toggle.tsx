import classNames from 'classnames';
import React from 'react';
import { FaAlignCenter, FaList } from 'react-icons/fa';
import { Button, UncontrolledTooltip } from 'reactstrap';

export interface SidebarToggleProps {
  sidebarOpened: boolean;
  onMinimizeClick: () => void;
  toggleSidebar: () => void;
}

const SidebarToggle: React.FC<SidebarToggleProps> = ({
  sidebarOpened,
  onMinimizeClick,
  toggleSidebar,
}: SidebarToggleProps) => (
  <>
    <div className="navbar-minimize d-inline">
      <Button
        className="minimize-sidebar btn-just-icon"
        color="link"
        id="tooltip209599"
        onClick={onMinimizeClick}
      >
        <FaAlignCenter className="visible-on-sidebar-regular" />
        <FaList className="visible-on-sidebar-mini" />
      </Button>
      <UncontrolledTooltip delay={0} target="tooltip209599" placement="right">
        Sidebar toggle
      </UncontrolledTooltip>
    </div>
    <div
      className={classNames('navbar-toggle d-inline', {
        toggled: sidebarOpened,
      })}
    >
      <button className="navbar-toggler" type="button" onClick={toggleSidebar}>
        <span className="navbar-toggler-bar bar1" />
        <span className="navbar-toggler-bar bar2" />
        <span className="navbar-toggler-bar bar3" />
      </button>
    </div>
  </>
);

export default SidebarToggle;
