import { ProductCard } from '@components/ProductCard'

import data from '../../../data.json'
export function Products() {
  return (
    <section className="px-40 py-8">
      <h2 className="text-title-l font-extrabold "> Nossos cafés</h2>
      <div className="grid grid-cols-4 gap-8 mt-14">
        {data.coffees.map((product) => {
          return <ProductCard product={product} />
        })}
      </div>
    </section>
  )
}
