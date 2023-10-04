import datos from "../data/fotos";

const galeria = document.getElementById('galeria')

const cargarImagen = (id, nombre, descripcion, ruta) => {
    galeria.querySelector('.galeria__imagen').src = ruta;
    galeria.querySelector('.galeria__imagen').dataset.idImagen = id;
    galeria.querySelector('.galeria__titulo').innerText = nombre;
    galeria.querySelector('.galeria__descripcion-imagen-activa').innerText = descripcion


    const categoriaActual = galeria.dataset.categoria
    const fotos = datos.fotos[categoriaActual];

    let indexImagenActual
    fotos.forEach((foto, index) => {
        if (foto.id === id) {
            indexImagenActual = index
        }
    });
    //Eliminamos la clase activa d cualquier slide

    //Marcamos la imagen del carousel como activa
    if (galeria.querySelectorAll('.galeria__carousel-slide').length > 0) {
        galeria.querySelector('.galeria__carousel-slide--active').classList.remove('galeria__carousel-slide--active')
        galeria.querySelectorAll('.galeria__carousel-slide')[indexImagenActual].classList.add('galeria__carousel-slide--active')
    }

}

const cargarAnteriorSiguiente = (direccion) => {

    const categoriaActual = galeria.dataset.categoria
    const fotos = datos.fotos[categoriaActual]
    const idImagenActual = galeria.querySelector('.galeria__imagen').dataset.idImagen;

    let indexImagenActual
    fotos.forEach((foto,index)=> {
        if(foto.id == idImagenActual){
            indexImagenActual = index
        }
    })

    if (direccion === 'siguiente') {

        if(fotos[indexImagenActual +1]){
            const {id,nombre,ruta,descripcion} = (fotos[indexImagenActual + 1])
            cargarImagen(id,nombre,descripcion,ruta)
        }

    } else if (direccion === 'anterior') {

        if(fotos[indexImagenActual -1]){
            const {id,nombre,ruta,descripcion} = (fotos[indexImagenActual - 1])
            cargarImagen(id,nombre,descripcion,ruta)
        }

    }
}

export { cargarImagen, cargarAnteriorSiguiente }