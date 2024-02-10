const d = document,
$habilidad = d.getElementById('habiliddes'),
$title = d.createElement('h2'),
$ulHabilidades = d.createElement('ul'),
$liHabilidades1 = d.createElement('li'),
$liHabilidades2 = d.createElement('li'),
$liHabilidades3 = d.createElement('li'),
$liHabilidades4 = d.createElement('li'),
$liHabilidades5 = d.createElement('li'),
$fragmentoHabilidades = d.createDocumentFragment(),
datos = await fetch('./recurso/habilida.json'),
datoHabilidad = await datos.json()

datoHabilidad.forEach(el => {
    $title.textContent = el.title;
    $liHabilidades1.textContent = el.li1;
    $liHabilidades2.textContent = el.li2;
    $liHabilidades3.textContent = el.li3;
    $liHabilidades4.textContent = el.li4;
    $liHabilidades5.textContent = el.li5;

    $title.classList.add('title-h');
    $liHabilidades1.classList.add('li-h');
    $liHabilidades2.classList.add('li-h');
    $liHabilidades3.classList.add('li-h');
    $liHabilidades4.classList.add('li-h');
    $liHabilidades5.classList.add('li-h');

    $habilidad.appendChild($title);
    $ulHabilidades.appendChild($liHabilidades1);
    $ulHabilidades.appendChild($liHabilidades2);
    $ulHabilidades.appendChild($liHabilidades3);
    $ulHabilidades.appendChild($liHabilidades4);
    $ulHabilidades.appendChild($liHabilidades5);

    $fragmentoHabilidades.appendChild($ulHabilidades)
    $habilidad.appendChild($fragmentoHabilidades)


});



export default $habilidad