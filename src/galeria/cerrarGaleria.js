const galeria = document.getElementById('galeria')

const cerrarGaleria = () => {
    document.body.style.overflow = ''
    galeria.classList.remove('galeria--active')
}
export default cerrarGaleria