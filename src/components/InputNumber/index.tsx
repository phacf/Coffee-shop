import { Minus, Plus } from '@phosphor-icons/react'

interface InputNumberProps {
  amound?: number
}

export function InputNumber({ amound = 1 }: InputNumberProps) {
  return (
    <div className="flex p-2 bg-base-button gap-1 items-center rounded-lg">
      <button className="text-purple hover:text-purple-dark hover">
        <Minus size={14} />
      </button>
      <div>{amound}</div>
      <button className="text-purple hover:text-purple-dark hover">
        <Plus size={14} />
      </button>
    </div>
  )
}
