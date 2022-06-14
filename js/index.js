



const botones = document.querySelectorAll("[data-boton]");

const secciones = document.querySelectorAll("[data-seccion]");



botones.forEach(boton => {


  boton.addEventListener("click",(e)=>{

    //  mostrarVista(secciones,e.target.parentNode);

    secciones.forEach(seccionn =>{

        if(seccionn.dataset.seccion==boton.dataset.boton){
            seccionn.classList.remove("desactivar");
            seccionn.classList.add("activar");
        }else{
            seccionn.classList.remove("activar");
            seccionn.classList.add("desactivar");
        }
    })
  })  
    
});










