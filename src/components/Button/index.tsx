import {
  MapPinLine,
  MapPin,
  Trash,
  CurrencyDollar,
  ShoppingCartSimple,
  Timer,
  Package,
  Coffee,
  Plus,
  Minus,
  CreditCard,
  Money,
  Bank,
} from '@phosphor-icons/react'
import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const icons = {
  MapPinLine: <MapPinLine size={26} />,
  MapPin: <MapPin size={26} weight="fill" />,
  Trash: <Trash size={26} />,
  CurrencyDollar: <CurrencyDollar size={26} />,
  ShoppingCartSimple: <ShoppingCartSimple size={26} weight="fill" />,
  Timer: <Timer size={26} weight="fill" />,
  Package: <Package size={26} weight="fill" />,
  Coffee: <Coffee size={26} weight="fill" />,
  Plus: <Plus size={26} />,
  Minus: <Minus size={26} />,
  CreditCard: <CreditCard size={26} />,
  Money: <Money size={26} />,
  Bank: <Bank size={26} />,
}

type ButtonProps = ComponentProps<'button'> & {
  icon?: keyof typeof icons
  appearence?: 'primary' | 'secondary' | 'purple' | 'cart' | 'darkPurple'
  selected?: boolean
}

export function Button(props: ButtonProps) {
  const { children, icon, appearence = 'primary', selected, ...rest } = props

  const IconComponent = icon ? icons[icon] : null

  const buttonClass = tv({
    base: `flex rounded-lg`,
    variants: {
      color: {
        primary: 'bg-yellow hover:bg-yellow-dark',
        secondary: 'bg-base-button hover:bg-base-hover active:bg-purple-light active:ring-1 active:ring-purple',
        purple: 'bg-purple-light text-purple',
        darkPurple: `bg-purple-dark text-base-card ${selected && 'bg-purple'}`,
        cart: 'bg-yellow-light text-yellow-dark',
      },
      size: {
        default: 'py-3 px-11 ',
        withIcon: 'gap-3 p-2',
      },
    },
  })

  return (
    <button
      {...rest}
      className={buttonClass({
        size: icon ? 'withIcon' : 'default',
        color: appearence,
      })}
    >
      {IconComponent}
      {children}
    </button>
  )
}
