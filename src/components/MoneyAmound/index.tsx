import { getCurrency } from '@helpers/money'

interface MoneyAmoundProps {
  price: number
}

export function MoneyAmound({ price }: MoneyAmoundProps) {
  return (
    <div className="flex items-baseline gap-1">
      <aside className="text-text-s font-roboto">R$</aside>
      <aside className="text-title-m font-baloo font-extrabold">{getCurrency(price)}</aside>
    </div>
  )
}
