import { ButtonProps } from '../../types/button';

export const SecondButton = ({ buttonPrimary, onClick }: ButtonProps) => {
  return (
    <div>
      <button className={`btn ${buttonPrimary ? 'btn-primary' : ''}`} onClick={onClick}>
        Second
      </button>
    </div>
  );
};

export default SecondButton;
