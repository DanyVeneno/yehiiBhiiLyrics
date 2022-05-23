import {useState}from 'react'
import useLetras from '../hooks/useLetras'
//nfn
//rafce
const Formulario = () => {

    const{setAlerta, busquedaLetra} = useLetras()

    const[busqueda, setBusqueda]=useState({

        artista:'',
        cancion:'',
    })
        
const handleSubmit = e =>{
    e.preventDefault()
    if(Object.values(busqueda).includes('')){
        setAlerta('Coloca nombre de Artista y Canción')
        return

    }
    busquedaLetra(busqueda)
    //setAlerta('')
}

  return (

    <form
        onSubmit={handleSubmit}
        >

        <legend>Buscar por artistas y canciones</legend>

        <div className="form-grid">
            <div>
                <label htmlFor="">Artista</label>
                <input 
                type="text" 
                name="artista" 
                placeholder="Nombre del artista"
                value={busqueda.artista}
                onChange={e => setBusqueda({
                    ...busqueda,
                    [e.target.name]:e.target.value
                })}
                 
                
                />
            </div>
            <div>
                <label htmlFor="">Canción</label>
                <input 
                type="text" 
                name="cancion" 
                placeholder="Nombre de la Canción"
                value={busqueda.cancion}
                onChange={e => setBusqueda({
                    ...busqueda,
                    [e.target.name]:e.target.value
                })}
                
                
                />
            </div>
            <input type="submit" value="Buscar" />
        </div>
    </form>
   
  )
}

export default Formulario