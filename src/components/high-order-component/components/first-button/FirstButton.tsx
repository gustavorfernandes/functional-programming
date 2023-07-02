import { ButtonProps } from '../../types/button';

export const FirstButton = ({ buttonPrimary, onClick }: ButtonProps) => {
  return (
    <div>
      <button className={`btn ${buttonPrimary ? 'btn-primary' : ''}`} onClick={onClick}>
        First
      </button>
    </div>
  );
};

export default FirstButton;
