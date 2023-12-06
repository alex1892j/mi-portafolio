const d = document,
    $headerPerfil = d.getElementById('header'),
    $perfil = d.createElement('section'),
    $perfilArticle = d.createElement('article'),
    $portada = d.createElement('img'),
    $imgPerfil = d.createElement('img'),
    $nombrePerfil = d.createElement('h1'),
    $proPerfil = d.createElement('p'),
    $fragmentaciones = d.createDocumentFragment(),
    $per = await fetch('./recursosjson/heder.json'),
    dataperfil = await $per.json();

dataperfil.forEach(el => {
    $portada.setAttribute('src', el.imgportada);
    $imgPerfil.setAttribute('src', el.imgperfil);
    $nombrePerfil.textContent = el.nombreperfil;
    $proPerfil.textContent = el.profecionperfil;
    $proPerfil.classList.add('profecional')
    $perfil.classList.add('seccion-perfil');
    $perfilArticle.classList.add('artcle-perfil')
    $imgPerfil.classList.add('imagen-perfil');
    $portada.classList.add('imagen-portada');
    $nombrePerfil.classList.add('nombre-perfil');

    $perfil.appendChild($portada);
    $perfilArticle.appendChild($imgPerfil);
    $perfilArticle.appendChild($nombrePerfil);
    $perfil.appendChild($perfilArticle)
    $perfil.appendChild($proPerfil);


    $fragmentaciones.appendChild($perfil);
    $headerPerfil.appendChild($fragmentaciones);

});


export default $headerPerfil