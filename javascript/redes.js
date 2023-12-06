const d = document,
    $asideSection = d.getElementById('barra-lateral'),
    $fragmentoRedes = d.createDocumentFragment(),
    $artRedes = d.createElement('article'),
    $iconoLinkedin = d.createElement('img'),
    $iconogithup = d.createElement('img'),
    $iconoTiktok = d.createElement('img'),
    $iconoWasapp = d.createElement('a'),
    $linkedin = d.createElement('a'),
    $githup = d.createElement('a'),
    $tiktok = d.createElement('a'),
    $sociales = await fetch('./recursosjson/redes.json'),
    $datosRedes = await $sociales.json();

$datosRedes.forEach(el => {
    $iconoLinkedin.setAttribute('src', el.linkedin);
    $linkedin.setAttribute('href', el.enlaceLinkedin);
    $linkedin.setAttribute('target', el.blank);
    $iconogithup.setAttribute('src', el.githup);
    $githup.setAttribute('href', el.enlaceGithup);
    $githup.setAttribute('target', el.blank);
    $iconoTiktok.setAttribute('src', el.tiktok);
    //$tiktok.setAttribute('href');
    $tiktok.setAttribute('target', el.blank);
    $iconoWasapp.setAttribute('href', el.numWasapp);
    $iconoWasapp.setAttribute('target', el.blank);
    $iconoWasapp.innerHTML = el.wasapp;

    $iconoLinkedin.classList.add('style-rs');
    $iconogithup.classList.add('style-rs');
    $iconoTiktok.classList.add('style-rs');
    $artRedes.classList.add('section-redes');
    $iconoWasapp.classList.add('boton-waspp');

    $linkedin.appendChild($iconoLinkedin)
    $githup.appendChild($iconogithup);
    $artRedes.appendChild($linkedin);
    $artRedes.appendChild($githup);
    $artRedes.appendChild($iconoTiktok);
    $artRedes.appendChild($iconoWasapp);

    $fragmentoRedes.appendChild($artRedes);
    $asideSection.appendChild($fragmentoRedes);
});

export default $asideSection;