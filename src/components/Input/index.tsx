import { useState } from 'react'
import { ComponentProps } from 'react'
interface InputProps extends ComponentProps<'input'> {
  label: string
  isOpt?: boolean
}
export function Input({ label = '', isOpt, ...props }: InputProps) {
  const [value, setValue] = useState('')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  return (
    <div className="relative flex items-center bg-base-input border border-base-button rounded-lg">
      {' '}
      <input
        value={value}
        onChange={handleChange}
        className="placeholder:text-base-label text-base-text text-text-s placeholder:text-text-s w-full p-3 rounded-lg bg-transparent focus:ring-[1px] focus:outline-none focus:ring-yellow-dark"
        placeholder={label}
        {...props}
      />{' '}
      {isOpt && !value && <aside className="absolute italic text-base-label text-text-s right-3"> Opcional </aside>}{' '}
    </div>
  )
}
