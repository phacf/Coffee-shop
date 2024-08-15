import { Button } from '@components/Button'

import { Cart } from './Cart'

export function Header() {
  return (
    <header className="flex px-40 py-8 justify-between">
      <img src="public/logo.svg" />
      <div className="flex gap-3">
        <Button icon="MapPin" appearence="purple">
          PORTO ALEGRE, RS
        </Button>
        <Cart />
      </div>
    </header>
  )
}
