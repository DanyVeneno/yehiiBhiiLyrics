
import useLetras from "../hooks/useLetras"
//nfn
//rafce


export const Letra = () => {

const {letra, cargando} = useLetras()

  return (
      cargando?'Cargando...':
    <div className="letra">{letra}</div>
  )
}
export default Letra