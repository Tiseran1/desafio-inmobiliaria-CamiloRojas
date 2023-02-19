const propiedadesJSON = [
    {
      nombre: "Casa de campo",
      descripcion: "Una madriguera especial para descansar",
      src:
        "https://p4.wallpaperbetter.com/wallpaper/335/429/69/nature-mountains-the-city-waterfall-the-lord-of-the-rings-hd-wallpaper-preview.jpg",
      cuartos: 2,
      metros: 170
    },
    {
      nombre: "Casa de playa",
      descripcion: "Contempla la inmencidad del oceano y sientete insignificante",
      src:
        "https://w0.peakpx.com/wallpaper/402/661/HD-wallpaper-houses-on-rocks-cliff-in-ocean-waves-background-nature.jpg",
      cuartos: 2,
      metros: 130
    },
    {
      nombre: "Casa en el centro",
      descripcion: "Si no te importan los espiritus, esta es tu casa",
      src:
        "https://img.freepik.com/fotos-premium/casa-abandonada-ventanas-rotas-centro-pueblo_395451-430.jpg?w=1380",
      cuartos: 1,
      metros: 80
    },
    {
      nombre: "Casa rodante",
      descripcion: "Papeles atrasados pero funcionando",
      src:
        "https://thumbs.dreamstime.com/z/rv-abandonado-65638737.jpg",
      cuartos: 1,
      metros: 6
    },
    {
      nombre: "Departamento",
      descripcion: "Una manito de gato y es perfecto",
      src:
        "https://es.theepochtimes.com/assets/uploads/2019/07/china_apartment_shambles-700x420.jpg",
      cuartos: 3,
      metros: 200
    },
    {
      nombre: "Mansión",
      descripcion: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      cuartos: 5,
      metros: 500
    }
  ];
  

  let botonBuscar = document.getElementById("btnBuscar");
  let inputCantidadCuartos = document.querySelector("#cantidadCuartos");
  let inputMetrosMinimos = document.querySelector("#metrosMin");
  let inputMetrosMaximos = document.querySelector("#metrosMax");



  botonBuscar.addEventListener("click", function(){
    let cantidadCuartos = inputCantidadCuartos.value;
    let metrosMinimos = inputMetrosMinimos.value;
    let metrosMaximos = inputMetrosMaximos.value;

const inputs = [cantidadCuartos, metrosMinimos, metrosMaximos];

    if (!validarInputs(inputs)){
      alert ("faltan campos por llenar");
      return false; 
    }

    

    let propiedadesFiltradas = filtrarPropiedades(propiedadesJSON, inputs);
    console.log(propiedadesFiltradas);
    document.querySelectorAll('.propiedad').forEach(function(el) {
      el.style.display = 'none';
    });
    for(let i = 0; i < propiedadesFiltradas.length; i++){
      let divId = propiedadesFiltradas[i]["nombre"];
      document.getElementById(divId).style.display = 'block';
    }
    document.getElementById("total").innerHTML = propiedadesFiltradas.length;
  });
  
  const validarInputs = inputs => {
    for (let input of inputs){
      if(input == ""){
        alert("faltan campos por rellenar");
        return false;
      }
    }
    return true;
  
  };
  

  const filtrarPropiedades = (propiedades, inputs) => {
  
    let propiedadesFiltradas = [];
    let indexPropiedadFiltrada = 0;
    
    for(var i = 0; i < propiedades.length; i++){
    
      if(
          propiedades[i].cuartos == inputs[0] && 
          propiedades[i].metros >= inputs[1] &&
          propiedades[i].metros <= inputs[2] 
      ){
        propiedadesFiltradas[indexPropiedadFiltrada] = propiedades[i];
        indexPropiedadFiltrada++;
        console.log("entro")
      } else {
        console.log("no entro")
      }
  
      
    }
      console.log(propiedadesFiltradas)
    return propiedadesFiltradas;
  }
  