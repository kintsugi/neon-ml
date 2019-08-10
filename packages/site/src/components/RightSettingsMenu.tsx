import React, { useState } from 'react';
import Switch from 'react-bootstrap-switch';
import { FaCog } from 'react-icons/fa';

export interface RightSettingsMenuProps {
  sidebarMinimized: boolean;
  onMinimizeClick: () => void;
}

const RightSettingsMenu: React.FC<RightSettingsMenuProps> = ({
  sidebarMinimized,
  onMinimizeClick,
}: RightSettingsMenuProps) => {
  const [classes, setClasses] = useState('dropdown');
  const [darkMode, setDarkMode] = useState(true);

  const onClick = (): void => {
    if (classes === 'dropdown') {
      setClasses('dropdown show');
    } else {
      setClasses('dropdown');
    }
  };
  const onDarkModeChange = (): void => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('white-content');
  };

  return (
    <div className="fixed-plugin">
      <div className={classes}>
        <a
          href="#neon"
          onClick={e => {
            e.preventDefault();
            onClick();
          }}
        >
          <FaCog className="settings-btn" size="2em" />
        </a>
        <ul className="dropdown-menu show" style={{ padding: '5px' }}>
          <li className="header-title">Minimize Sidebar</li>
          <li className="adjustments-line">
            <div className="togglebutton switch-sidebar-mini">
              <span className="label-switch">OFF</span>
              <Switch
                onChange={onMinimizeClick}
                value={sidebarMinimized}
                onText=""
                offText=""
              />
              <span className="label-switch">ON</span>
            </div>
          </li>
          <li className="adjustments-line">
            <div className="togglebutton switch-change-color mt-3">
              <span className="label-switch">LIGHT MODE</span>
              <Switch
                onChange={onDarkModeChange}
                value={darkMode}
                onText=""
                offText=""
              />
              <span className="label-switch">DARK MODE</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightSettingsMenu;
