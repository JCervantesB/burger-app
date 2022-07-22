import { useContext } from 'react'
import BurgerAppContext from '../context/BurgerAppProvider'

const useBurgerApp = () => {
    return useContext(BurgerAppContext)
}

export default useBurgerApp;