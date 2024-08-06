import { useState, useRef, useEffect } from 'react'
export const navegacionMasHooks = () => {
    const [classMas, setClassMas] = useState(false)
    const masOpcionesRef = useRef(null)
    const btnMasRef = useRef(null)
    const handleClickMas = () => {
        setClassMas(!classMas)
    }
    const handleClickOutsideMas = (event) => {
        if (masOpcionesRef.current && !masOpcionesRef.current.contains(event.target) && btnMasRef.current && !btnMasRef.current.contains(event.target)) {
            setClassMas(false)
        }
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutsideMas)
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideMas)
        }
    }, [])
    const txtClassMas = classMas ? 'masOpciones' : 'noMostrarMas'

    return {classMas, masOpcionesRef, btnMasRef, txtClassMas, handleClickMas}
}