import { navigateTo } from 'gatsby';
import { InputGroup } from 'reactstrap';
import React from 'react';

export interface LinkProps {
  to: string;
}

const Link: React.FC<LinkProps> = ({ to }: LinkProps) => (
  <InputGroup className="shadow-box">
    <a
      href={to}
      className="shadow-box-content"
      target="_blank"
      rel="noopener noreferrer"
    >
      Log In
    </a>
  </InputGroup>
);

export default Link;
