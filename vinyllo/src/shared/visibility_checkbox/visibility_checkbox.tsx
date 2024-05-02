import { Checkbox } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

type TVCBProps = { showPassword: boolean; onClick: () => void };
type TVCB = (props: TVCBProps) => JSX.Element;

export const VisibilityCheckBox: TVCB = ({ showPassword, onClick }) => {
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
