import usuarioMeGustaHook from "./Hooks/usuarioMeGusta";
import { VentanaEmergente } from "../../../../sugerencias/ventanaEmergentes/ventanaEmergente";
const UsuariosMeGusta = ({ img, user, userName }) => {
 const { isFollower, ventana, handleClick, dejarDeSeguir, handleClickVentanaCerrar } = usuarioMeGustaHook();
  const classNameBtn = isFollower ? "btnSeguirMeGustaActive" : undefined;
  const classNameVentana = ventana ? 'ventanaEmergente activeVentana' : 'ventanaEmergente'
  return (
    <>
      <article className="usuarioMeGustaContainer">
        <div className="imgUsuarioMeGusta">
          <img src={img} alt={user} />
        </div>
        <div className="userMeGusta">
          <span>{user}</span>
          <span>{userName}</span>
        </div>
        <div className="btnMeGusta">
          <button onClick={handleClick} className={classNameBtn}>
            <span>{isFollower ? "Siguiendo" : "Seguir"}</span>
          </button>
        </div>
      </article>
      <VentanaEmergente
        btnCancelar={classNameVentana}
        user={user}
        desactivarVentana={handleClickVentanaCerrar}
        dejarDeSeguir={dejarDeSeguir}
      />
    </>
  );
};

export default UsuariosMeGusta;
