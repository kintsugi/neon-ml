import React from 'react';
import ReactSwitch, { ReactSwitchProps } from 'react-switch';

export interface SwitchProps extends ReactSwitchProps {
  offLabel: string;
  onLabel: string;
}

const Switch: React.FC<SwitchProps> = ({
  offLabel,
  onLabel,
  ...props
}: SwitchProps) => (
  <>
    <span className="label-switch">{offLabel}</span>
    <ReactSwitch {...props} />
    <span className="label-switch">{onLabel}</span>
  </>
);

export default Switch;
