export const handleClick = (buttonPrimary: boolean, setButtonClass: (data: boolean) => void) => {
  setButtonClass(!buttonPrimary);
};
