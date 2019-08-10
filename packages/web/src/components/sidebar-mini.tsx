import React from 'react';
import { FaAlignCenter, FaList } from 'react-icons/fa';

export interface SidebarMiniProps {
  opacity: number;
  onMinimizeClick: () => void;
}

const SidebarMini: React.FC<SidebarMiniProps> = ({
  opacity,
  onMinimizeClick,
}: SidebarMiniProps) => (
  <div className="navbar-minimize-fixed" style={{ opacity }}>
    <button
      type="button"
      className="minimize-sidebar btn btn-link btn-just-icon"
      onClick={onMinimizeClick}
    >
      <FaAlignCenter className="visible-on-sidebar-regular text-muted" />
      <FaList className="visible-on-sidebar-mini text-muted" />
    </button>
  </div>
);

export default SidebarMini;
