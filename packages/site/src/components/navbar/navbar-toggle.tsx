import React from 'react';

export interface NavbarToggleProps {
  toggleCollapse: () => void;
}

const NavbarToggle: React.FC<NavbarToggleProps> = ({
  toggleCollapse,
}: NavbarToggleProps) => (
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navigation"
    aria-expanded="false"
    aria-label="Toggle navigation"
    onClick={toggleCollapse}
  >
    <span className="navbar-toggler-bar navbar-kebab" />
    <span className="navbar-toggler-bar navbar-kebab" />
    <span className="navbar-toggler-bar navbar-kebab" />
  </button>
);

export default NavbarToggle;
