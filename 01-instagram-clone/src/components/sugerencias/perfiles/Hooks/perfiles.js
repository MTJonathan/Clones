import {useState} from 'react'
export const perfilesHook = () => {
    const [isFollowing, setIsFollowing] = useState(false)
    const [ventanaActiva, setVentanaActiva] = useState(false);
    const DejarSeguir = () => {
        document.body.classList.remove("modal-abierto");
        setIsFollowing(false);
        setVentanaActiva(false);
    }
    const handleFollow = () => {
        if (isFollowing) {
            document.body.classList.add("modal-abierto");
            setVentanaActiva(true);
        } else {
            setIsFollowing(true);
        }
    }
    const desactivarVentana = () => {
        document.body.classList.remove("modal-abierto");
        setVentanaActiva(false);
    };
    const txtBtn = isFollowing ? 'Seguiendo' : 'Seguir'
    const btnClass = isFollowing ? 'perfilesBtn perfilesBtnIsFollow' : 'perfilesBtn'
    const btnCancelar = ventanaActiva ? 'ventanaEmergente activeVentana' : 'ventanaEmergente';
    
    return{
        handleFollow,
        DejarSeguir,
        desactivarVentana,
        txtBtn,
        btnClass,
        btnCancelar
    }
}