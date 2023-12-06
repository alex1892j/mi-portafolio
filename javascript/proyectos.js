const d = document,
    $proyecto = d.getElementById('proyectos'),
    $fragmentoproyecto = d.createDocumentFragment(),
    $proyectoArtcle = d.createElement('article'),
    $h2Proyecto = d.createElement('h2'),
    $figureProyecto = d.createElement('figure'),
    $imgProyecto = d.createElement('img'),
    $figcationProyecto = d.createElement('figcaption'),
    $descripcionProyecto = d.createElement('p'),
    $enlaceProyecto = d.createElement('a'),
    data = await fetch('./recursosjson/proyectos.json'),
    $datosProyecto = await data.json();

$datosProyecto.forEach( el => {
    $h2Proyecto.textContent = el.h2Proyectos;
    $imgProyecto.setAttribute('src', el.imgPorfolioUgc);
    $figcationProyecto.textContent = el.tituloFigcation;
    $descripcionProyecto.textContent = el.pProyectos;
    $enlaceProyecto.setAttribute('href', el.link);
    $enlaceProyecto.setAttribute('target', el.blank);
    $enlaceProyecto.innerHTML = el.btn;


    $proyectoArtcle.classList.add('article-proyecto-style');
    $h2Proyecto.classList.add('h2-proyecto-style');
    $figureProyecto.classList.add('figure-proyecto-style');
    $figcationProyecto.classList.add('figcation-proyecto-style');
    $imgProyecto.classList.add('img-proyecto-style');
    $descripcionProyecto.classList.add('descripcion-proyecto-style');

    $figureProyecto.appendChild($figcationProyecto);
    $figureProyecto.appendChild($imgProyecto);
    $figureProyecto.appendChild($descripcionProyecto);
    $figureProyecto.appendChild($enlaceProyecto);
    $proyectoArtcle.appendChild($h2Proyecto);
    $proyectoArtcle.appendChild($figureProyecto);
    
    let $clone = d.importNode($proyectoArtcle, true)
    $fragmentoproyecto.appendChild($clone);

    $proyecto.appendChild($fragmentoproyecto);

});


export default $proyecto


