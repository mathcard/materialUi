import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const CustomButton = styled(Button)({
  //background: 'linear-gradient(to right, rgba(102,187,106,1) 0%, rgba(69,146,73,1) 44%, rgba(27,94,32,1) 100%);',
  textAlign: 'center',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(102, 187, 106, .2)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  margin: 8,
});

export default CustomButton;