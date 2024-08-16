import { ShoppingCartSimple, Timer, Package, Coffee } from '@phosphor-icons/react'

export function Brand() {
  return (
    <section className="bg-[url('/public/images/hero-bg.svg')] bg-cover grid grid-cols-2 gap-14 px-40 py-20">
      <div className="w-[36.75rem] ">
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h3 className=" mt-4 mb-16">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h3>

        <div className="grid grid-rows-2 grid-flow-col gap-6">
          <div className="flex gap-3 items-center">
            <div className="bg-yellow-dark text-white rounded-full flex justify-center p-2">
              <ShoppingCartSimple size={16} weight="fill" />
            </div>
            <aside>Compra simples e segura</aside>
          </div>

          <div className="flex gap-3 items-center">
            <div className="bg-yellow text-white rounded-full flex justify-center p-2">
              <Timer size={16} weight="fill" />
            </div>
            <aside>Entrega rápida e rastreada</aside>
          </div>

          <div className="flex gap-3 items-center">
            <div className="bg-base-text text-white rounded-full flex justify-center p-2">
              <Package size={16} weight="fill" />
            </div>
            <aside>Embalagem mantém o café intacto</aside>
          </div>

          <div className="flex gap-3 items-center">
            <div className="bg-purple text-white rounded-full flex justify-center p-2">
              <Coffee size={16} weight="fill" />
            </div>
            <aside>O café chega fresquinho até você</aside>
          </div>
        </div>
      </div>

      <div>
        <img src="public/images/hero.svg" />
      </div>
    </section>
  )
}
