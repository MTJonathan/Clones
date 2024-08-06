import { enlacesInformacion } from "./js/informacion";
export function Informacion() {
  return (
    <>
      <div className="informacionPerfiles">
        <span>
          {enlacesInformacion.map((enlace, index) => (
            <>
              <a href={enlace.link} target="_blank">
                {enlace.txt}
              </a> 
              {index < enlacesInformacion.length - 1 && " · "}
            </>
          ))}
        </span>
        <span>&copy; 2024 INSTAGRAM FROM META</span>
      </div>
    </>
  );
}
