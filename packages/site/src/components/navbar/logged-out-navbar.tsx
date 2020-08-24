import React from 'react';
import authApi from '@api/auth';
import Link from '../link';

const LoggedOutNavbar: React.FC = () => (
  <>
    <Link to={authApi.urls.login} />
  </>
);

export default LoggedOutNavbar;
