import { ComponentProps } from 'react'

interface ProductCardProps extends ComponentProps<'div'> {
  product: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-base-card p-5 w-64 rounded-tr-[36px] rounded-bl-[36px] flex flex-col items-center">
      <img src={product.image} className="w-[7.5rem] h-[7.5rem] -mt-12 mb-3" />
      <div className="flex gap-1 mb-4">
        {product.tags.map((tag) => (
          <div className="text-tag py-1 px-2 bg-yellow-light text-yellow-dark font-bold rounded-md ">
            {tag.toUpperCase()}
          </div>
        ))}
      </div>
      <h3 className='text-title-s font-bold'>{product.title}</h3>
      <div className='text-text-s text-base-label text-center m-2 mb-8'>{product.description}</div>
      
    </div>
  )
}
