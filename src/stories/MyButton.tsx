import React from 'react';
import { block } from 'bem-cn';

import './MyButton.scss';

const b = block("button");


type ButtonProps = {
  size?: "small" | "medium" | "large";
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
export const Button = ({ className, children, size = "medium", ...rest }: React.PropsWithChildren<ButtonProps>) => {

  return (
    <button
      className={b({ size }).mix(className)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
