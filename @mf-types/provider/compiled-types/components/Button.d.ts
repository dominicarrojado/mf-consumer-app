import { HTMLProps } from 'react';
declare const buttonVariants: {
    outline: string;
    light: string;
};
type ButtonProps = HTMLProps<HTMLButtonElement> & {
    variant?: keyof typeof buttonVariants;
};
declare function Button(props: ButtonProps): import("react/jsx-runtime").JSX.Element;
export default Button;
