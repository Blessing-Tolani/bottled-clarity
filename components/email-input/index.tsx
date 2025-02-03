'use client'
import clsx from 'clsx'

export default function EmailInput({
  className,
  email,
  setEmail,
  disabled,
}: {
  className: string
  email: string
  setEmail: (value: string) => void
  disabled?: boolean
}) {
  return (
    <input
      placeholder="Enter your email address"
      onChange={(e) => {
        setEmail(e.target.value)
      }}
      autoComplete="off"
      disabled={disabled}
      value={email}
      className={clsx(
        'px-3 md:px-5 py-2 md:py-3 mdMax:text-xs h-10 md:h-12  rounded-full w-48 md:w-[22.5rem] outline-none font-medium',
        className
      )}
    />
  )
}
