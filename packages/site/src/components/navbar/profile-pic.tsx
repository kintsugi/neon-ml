import React from 'react';
import { DropdownToggle } from 'reactstrap';

export interface ProfilePicProps {
  src: string;
  children: React.ReactNode;
}

const ProfilePic: React.FC<ProfilePicProps> = ({
  src,
  children,
}: ProfilePicProps) => (
  <DropdownToggle
    caret
    color="default"
    data-toggle="dropdown"
    nav
    onClick={e => e.preventDefault()}
  >
    <div className="photo">
      <img alt="..." src={src} />
    </div>
    {children}
  </DropdownToggle>
);

export default ProfilePic;
