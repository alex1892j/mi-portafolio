const d = document,
    $sobreMi = d.getElementById('sobre-mi'),
    $fragmentoSobreMi = d.createDocumentFragment(),
    $sobreMiArtcle = d.createElement('article'),
    $h2SobreMi = d.createElement('h2'),
    $parrafoSobreMi = d.createElement('p'),
    $jsonSobreMi = await fetch('./recurso/sobremi.json'),
    datosSobreMi = await $jsonSobreMi.json();

datosSobreMi.forEach(el => {
    $h2SobreMi.textContent = el.h2;
    $parrafoSobreMi.innerHTML = el.pSobreMi;
    $sobreMiArtcle.classList.add('artcle-sobre-mi');
    $h2SobreMi.classList.add('h2-sobre-mi');
    $parrafoSobreMi.classList.add('p-sobre-mi');

    $sobreMiArtcle.appendChild($h2SobreMi);
    $sobreMiArtcle.appendChild($parrafoSobreMi);
    $fragmentoSobreMi.appendChild($sobreMiArtcle);
    $sobreMi.appendChild($fragmentoSobreMi);
});

export default $sobreMi;