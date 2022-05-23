import {useContext} from 'react'
import LetrasContext from '../context/LetrasProvider'
//nfn
//rafce

const useLetras = () => {
  return useContext (
      LetrasContext
    
  )
}

export default useLetras