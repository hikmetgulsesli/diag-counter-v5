import { ButtonHTMLAttributes, ReactNode } from 'react'
import './Button.css'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export function IncrementButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button variant="primary" size="lg" {...props}>
      +
    </Button>
  )
}

export function DecrementButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button variant="secondary" size="lg" {...props}>
      -
    </Button>
  )
}

export function ResetButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button variant="danger" size="md" {...props}>
      Reset
    </Button>
  )
}
