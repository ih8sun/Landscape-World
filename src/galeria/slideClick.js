import datosFotos from "../data/fotos";
import { cargarImagen } from "./cargarImagen";


const slideClick = (e) => {
    const galeria = document.getElementById('galeria')
    const categoriaActiva = galeria.dataset.categoria
    const idSeleccionado = e.target.dataset.id

    // console.log(categoriaActiva);
    // console.log(idSeleccionado);

    datosFotos.fotos[categoriaActiva].forEach(foto => {
        if(foto.id == idSeleccionado){
            const {nombre,descripcion,ruta} = foto
            cargarImagen(foto.id,nombre,descripcion,ruta)
        }
    })
    
}

export default slideClick