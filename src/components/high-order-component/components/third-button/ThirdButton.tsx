import { ButtonProps } from '../../types/button';

export const ThirdButton = ({ buttonPrimary, onClick }: ButtonProps) => {
  return (
    <div>
      <button className={`btn ${buttonPrimary ? 'btn-primary' : ''}`} onClick={onClick}>
        Third
      </button>
    </div>
  );
};

export default ThirdButton;
