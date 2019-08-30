import { Link as GatsbyLink } from 'gatsby';
import { InputGroup } from 'reactstrap';
import React from 'react';

export interface LinkProps {
  to: string;
}

const Link: React.FC<LinkProps> = ({ to }: LinkProps) => (
  <InputGroup className="shadow-box">
    <GatsbyLink className="shadow-box-content" to={to}>
      Log In
    </GatsbyLink>
  </InputGroup>
);

export default Link;
