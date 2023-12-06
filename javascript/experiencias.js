const d = document,
$experiencia = d.getElementById('experiencia'),
$fragmentoExperiencia = d.createDocumentFragment(),
$experienciaArticle = d.createElement('article'),
$h2Experiencia = d.createElement('h2'),
$parrafoExperiencia = d.createElement('p'),
exp = await fetch('./recursosjson/experiencia.json'),
datosExperiencia = await exp.json();

datosExperiencia.forEach( el => {
    $h2Experiencia.textContent = el.h2;
    $parrafoExperiencia.textContent = el.p;

    $experienciaArticle.classList.add('art-experiencia-style');
    $h2Experiencia.classList.add('h2-experiencia-style');
    $parrafoExperiencia.classList.add('p-experiencia-style');

    $experienciaArticle.appendChild($h2Experiencia);
    $experienciaArticle.appendChild($parrafoExperiencia);


    $fragmentoExperiencia.appendChild($experienciaArticle);
    $experiencia.appendChild($fragmentoExperiencia);
})

export default $experiencia;
