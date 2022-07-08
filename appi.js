const url = 'https://api.datos.gob.mx/v1/calidadAire';

fetch(url)
    .then((resp)=> resp.json())
    .then((datos)=>{
        const contenedor = document.querySelector('#contenedor');
        contenedor.innerHTML = 
        `<p> Clave:${datos.results[0]._id}</p>
        <p> ID:${datos.results[0].stations[0].id}</p>
        <p> Nombre: ${datos.results[0].stations[0].name}</p>
        <p> CalculationTime: ${datos.results[0].stations[0].indexes[0].calculationTime}</p>
        <p> Scale: ${datos.results[0].stations[0].indexes[0].scale}</p>`;
      
        console.log(datos.results[0]);
        
        const arrData = datos.map(function(){
            
        })

    })
    .catch((error)=>console.log(error))