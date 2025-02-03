import React from 'react'
import clsx from 'clsx'

type ButtonVariant = 'primary' | 'secondary' | 'transparent'

type ButtonProps = {
  variant?: ButtonVariant
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  className?: string
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-blue-100 text-white hover:bg-opacity-90',
  secondary: 'bg-white text-blue-100 ',
  transparent: 'bg-white bg-opacity-20 text-white text-opacity-50 ',
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  onClick,
  disabled,
  className,
}) => {
  return (
    <button
      className={clsx(
        'px-3 md:px-5 py-2 grid place-items-center md:py-3 h-10 md:h-12 rounded-full font-medium',
        variantClasses[variant],
        { 'opacity-50 cursor-not-allowed': disabled },
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
