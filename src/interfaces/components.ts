import { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes, HTMLAttributes } from 'react';

// Base component props
export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

// Button variants and sizes
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

// Button component props
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, BaseComponentProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
}

// Input variants and sizes
export type InputVariant = 'outline' | 'filled' | 'unstyled';
export type InputSize = 'sm' | 'md' | 'lg' | 'xl';

// Input component props
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, BaseComponentProps {
  variant?: InputVariant;
  size?: InputSize;
  error?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  label?: string;
  helperText?: string;
  fullWidth?: boolean;
}

// Textarea component props
export interface TextareaProps extends HTMLAttributes<HTMLTextAreaElement>, BaseComponentProps {
  variant?: InputVariant;
  size?: InputSize;
  error?: boolean;
  label?: string;
  helperText?: string;
  fullWidth?: boolean;
  rows?: number;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

// Card component props
export interface CardProps extends BaseComponentProps {
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  border?: boolean;
  hover?: boolean;
}

// Badge variants and sizes
export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'outline';
export type BadgeSize = 'sm' | 'md' | 'lg';

// Badge component props
export interface BadgeProps extends BaseComponentProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  rounded?: boolean;
}

// Avatar sizes
export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// Avatar component props
export interface AvatarProps extends BaseComponentProps {
  src?: string;
  alt?: string;
  size?: AvatarSize;
  fallback?: ReactNode;
  rounded?: boolean;
}

// Modal component props
export interface ModalProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
}

// Alert variants
export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

// Alert component props
export interface AlertProps extends BaseComponentProps {
  variant?: AlertVariant;
  title?: string;
  closable?: boolean;
  onClose?: () => void;
}

// Tooltip component props
export interface TooltipProps extends BaseComponentProps {
  content: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  disabled?: boolean;
}

// Dropdown component props
export interface DropdownProps extends BaseComponentProps {
  trigger: ReactNode;
  items: DropdownItem[];
  placement?: 'top' | 'bottom' | 'left' | 'right';
  disabled?: boolean;
}

export interface DropdownItem {
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  divider?: boolean;
}

// Tabs component props
export interface TabsProps extends BaseComponentProps {
  items: TabItem[];
  defaultIndex?: number;
  onChange?: (index: number) => void;
  variant?: 'line' | 'enclosed' | 'solid';
  size?: 'sm' | 'md' | 'lg';
}

export interface TabItem {
  label: string;
  content: ReactNode;
  disabled?: boolean;
  icon?: ReactNode;
}

// Progress component props
export interface ProgressProps extends BaseComponentProps {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'line' | 'circle';
  color?: 'primary' | 'success' | 'warning' | 'error';
  showValue?: boolean;
}

// Spinner component props
export interface SpinnerProps extends BaseComponentProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'white';
  thickness?: number;
  speed?: number;
}

// Divider component props
export interface DividerProps extends BaseComponentProps {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'solid' | 'dashed' | 'dotted';
  size?: 'sm' | 'md' | 'lg';
}

// Container component props
export interface ContainerProps extends BaseComponentProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  center?: boolean;
}

// Grid component props
export interface GridProps extends BaseComponentProps {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  responsive?: boolean;
}

// Flex component props
export interface FlexProps extends BaseComponentProps {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}
