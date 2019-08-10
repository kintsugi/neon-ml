import React from 'react';
import { Container } from 'reactstrap';

export interface FooterProps {
  isDefault?: boolean;
  fluid: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDefault, fluid }: FooterProps) => (
  <footer className={`footer${isDefault ? ' footer-default' : ''}`}>
    <Container fluid={!!fluid}>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link" href="mailto:kyle@neon-ml.cc">
            Contact Us
          </a>
        </li>{' '}
      </ul>
      <div className="copyright">
        © {new Date().getFullYear()} made with 💚 by kintsu
      </div>
    </Container>
  </footer>
);

export default Footer;
