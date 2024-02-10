const d = document,
    $proyecto = d.getElementById('proyectos'),
    $artproyecto = d.querySelector('.article-proyecto-style'),
    $temProyecto = d.getElementById('tem-proyecto').content,
    $fragmentoproyecto = d.createDocumentFragment(),
    data = await fetch('./recurso/proyectos.json'),
    $datosProyecto = await data.json();

$datosProyecto.forEach((el) => {
    
    $temProyecto.querySelector("figure").setAttribute("id", el.id)
    $temProyecto.querySelector("figcaption").textContent = el.titletarget;
    $temProyecto.querySelector("img").setAttribute("src", el.img);
    $temProyecto.querySelector("p").textContent = el.pProyectos;
    $temProyecto.querySelector("a").setAttribute("href", el.link)
    $temProyecto.querySelector("a").setAttribute("target", el.blank);

    

    let $clone = d.importNode($temProyecto, true)
    $fragmentoproyecto.appendChild($clone);

    $artproyecto.appendChild($fragmentoproyecto);

});


export default $artproyecto


