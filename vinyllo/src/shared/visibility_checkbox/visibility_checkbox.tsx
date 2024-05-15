import React from 'react';
import { Checkbox } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export type TVCBProps = { showPassword: boolean; onClick: () => void };
export type TVCB = (props: TVCBProps) => JSX.Element;

const VisibilityCheckBox: TVCB = ({ showPassword, onClick }) => {
  return (
    <Checkbox
      size="small"
      title={showPassword ? 'hide password' : 'show password'}
      onClick={onClick}
      icon={<VisibilityOffIcon fontSize="small" />}
      checkedIcon={<VisibilityIcon fontSize="small" />}
    />
  );
};

export  default VisibilityCheckBox;
