import { Coffee } from '@phosphor-icons/react'

export const Loading = () => {
  return (
    <div className="flex justify-center h-full">
      <Coffee className="imate-spin animate-color-cycle" size={50} weight="fill" />
    </div>
  )
}
