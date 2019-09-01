// import { Link as GatsbyLink } from 'gatsby';
import { InputGroup } from 'reactstrap';
import React from 'react';

export interface LinkProps {
  to: string;
}

const Link: React.FC<LinkProps> = ({ to }: LinkProps) => (
  <InputGroup className="shadow-box">
    <a className="shadow-box-content" href={to}>
      Log In
    </a>
  </InputGroup>
);

export default Link;
