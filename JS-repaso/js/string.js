let nombre="Fernando"
let apellido="Castillo"
let profesion="Desarrollado Web"

let fichaTecnica=`
        <div class="ficha">
            <h2>${nombre} ${apellido}</h2>
            <h3>${profesion}</h3>
            <p>JHEDJJDJDNDE</p>
        
         </div>

`;
//Permite crear un nodo en html crearemos una section
let cajaFichas=document.createElement("section");
//cargar la ficha tecnica
cajaFichas.innerHTML=fichaTecnica;
//cargar dentro de la caja de fichas

document.addEventListener('DOMContentLoaded',function(){
document.body.appendChild(cajaFichas)

},false)