import React from 'react';
import authApi from '@api/auth';
import Link from '../link';

console.log(authApi);

const LoggedOutNavbar: React.FC = () => (
  <>
    <Link to={authApi.urls.login} />
  </>
);

export default LoggedOutNavbar;
