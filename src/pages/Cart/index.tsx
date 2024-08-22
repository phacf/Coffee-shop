import { Button, Input } from '@components'
import { MapPinLine, CurrencyDollar } from '@phosphor-icons/react'

export function Cart() {
  return (
    <div className="py-10 px-40 grid grid-cols-3 gap-8">
      <div className="col-span-2 ">
        <h2 className="text-base-subtitle text-title-xs font-baloo font-bold mb-4">Complete seu pedido</h2>

        <div className="p-10  bg-base-card rounded-lg">
          <div className="flex items-start gap-2 text-yellow-dark">
            <MapPinLine size={26} />
            <div>
              <h2 className="text-base-subtitle text-text-m">Endereço de entrega</h2>
              <aside className="text-base-text text-text-s">Informe o endereço onde deseja receber seu pedido</aside>
            </div>
          </div>

          <form className="mt-8 grid grid-cols-6 gap-3">
            <div className="col-span-2">
              <Input label="CEP" />
            </div>
            <div className="col-span-6">
              <Input label="Rua" />
            </div>
            <div className="col-span-2">
              <Input label="Número" />
            </div>
            <div className="col-span-4">
              <Input label="Complemento" isOpt />
            </div>
            <div className="col-span-2">
              <Input label="Bairro" />
            </div>
            <div className="col-span-3">
              <Input label="Cidade" />
            </div>
            <div className="">
              <Input label="UF" />
            </div>
          </form>
        </div>

        <div className="p-10 mt-3 bg-base-card rounded-lg">
          <div className="flex items-start gap-2 text-purple">
            <CurrencyDollar size={26} />
            <div>
              <h2 className="text-base-subtitle text-text-m">Pagamento</h2>
              <aside className="text-base-text text-text-s">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </aside>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-8 ">
            <Button size="payment" icon="CreditCard" appearence="secondary">
              Cartão de crédito
            </Button>
            <Button size="payment" icon="CreditCard" appearence="secondary">
              Cartão de crédito
            </Button>
            <Button size="payment" icon="CreditCard" appearence="secondary">
              {/*trocar button por radio */}
              Cartão de crédito
            </Button>
          </div>
        </div>
      </div>

      <div className="">
        <h2 className="text-base-subtitle text-title-xs font-baloo font-bold mb-4">Cafés selecionados</h2>
        <div className="bg-base-card">dfasdf</div>
      </div>
    </div>
  )
}
