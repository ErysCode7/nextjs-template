import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  backgroundColor?: string;
  onClick?: () => void;
};

const Button = ({ text, backgroundColor, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      className="rounded py-2 px-3 bg-blue-500 text-white active:scale-95 w-full transition duration-200"
      onClick={onClick}
      style={{
        backgroundColor,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
