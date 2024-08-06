import { useState } from 'react'
export const postBtnHooks = () => {
    const [corazon, setCorazon] = useState(false)
    const [compartir, setCompartir] = useState(false)

    const classCompartir = compartir ? 'compartirActive' : 'compartirDesabled'
    const classCompartir2 = compartir ? 'compartirDesabled' : 'compartirActive'
    const classCorazon = corazon ? 'corazonActive' : 'corazonDesabled'
    const classCorazon2 = corazon ? 'corazonDesabled' : 'corazonActive'
    const handleClickGuardar = () => {
        setCompartir(!compartir)
    }
    const handleClickCorazon = () => {
        setCorazon(!corazon)
    }

    return { classCompartir, classCompartir2, classCorazon, classCorazon2, handleClickGuardar, handleClickCorazon }
}