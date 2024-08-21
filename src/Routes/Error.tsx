import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error: any = useRouteError()
  console.error(error)

  return (
    <div className="flex flex-col items-center h-full justify-center p-12" id="error-page">
      <h1 className="text-title-xl mb-24 font-baloo font-extrabold">Oops!</h1>
      <img className="w-96" src="public/images/sad.png" />
      <div className='text-text-l mt-9 font-roboto font-bold'>Ocorreu um erro! a pagina que você requisitou não existe ou está indisponivel</div>
    </div>
  )
}
