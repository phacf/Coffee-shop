import { Button } from '@components/Button'

export function Cart() {
  return (
    <div className="relative flex">
      <aside className="absolute -right-2 -top-2 bg-yellow-dark rounded-full text-tag font-bold text-white px-1.5 py-0.5">
        3
      </aside>
      <Button icon="ShoppingCartSimple" appearence="cart" />
    </div>
  )
}
