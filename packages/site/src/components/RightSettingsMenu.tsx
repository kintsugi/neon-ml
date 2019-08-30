import React, { useState } from 'react';
import { FaCog } from 'react-icons/fa';

import Switch from './switch';

export interface RightSettingsMenuProps {
  onMinimizeClick: () => void;
  sidebarMinized: boolean;
}

const RightSettingsMenu: React.FC<RightSettingsMenuProps> = ({
  onMinimizeClick,
  sidebarMinized,
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
    if (typeof document !== 'undefined') {
      document.body.classList.toggle('white-content');
    }
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
              <Switch
                onChange={onMinimizeClick}
                checked={sidebarMinized}
                offLabel="OFF"
                onLabel="ON"
                checkedIcon={false}
                uncheckedIcon={false}
              />
            </div>
          </li>
          <li className="adjustments-line">
            <div className="togglebutton switch-change-color mt-3">
              <Switch
                onChange={onDarkModeChange}
                checked={darkMode}
                offLabel="LIGHT MODE"
                onLabel="DARK MODE"
                checkedIcon={false}
                uncheckedIcon={false}
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightSettingsMenu;
