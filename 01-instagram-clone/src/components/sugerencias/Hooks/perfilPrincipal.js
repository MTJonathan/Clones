import { useState } from 'react'
export const perfilPrincipalhook = () => {
    const [VentanaCambiarActive, setVentanaCambiarActive] = useState(false);
    const cerrarVentanaCambiar = () => {
        document.body.classList.remove("modal-abierto");
        setVentanaCambiarActive(false);
    }
    const activeVentanaCambiar = () => {
        document.body.classList.add("modal-abierto");
        setVentanaCambiarActive(true);
    }
    const ventanaCambiarClass = VentanaCambiarActive ? 'ventanaCambiar ventanaCambiarActive' : 'ventanaCambiar';
    
    return{
        cerrarVentanaCambiar,
        activeVentanaCambiar,
        ventanaCambiarClass
    }
}