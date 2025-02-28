const myInformacion = document.querySelector("#myInformacion");
const myTabla = document.querySelector("#myTabla");
let DB = (localStorage.getItem("formularioCampus")) ? JSON.parse(localStorage.getItem("formularioCampus")) : [];

addEventListener("DOMContentLoaded", (e) =>{
    let plantilla = "";
    for (let i = 0; i < DB.length; i++) {
        plantilla +=`
              <tr>
                  <th>${i}</td>
                  <th>${DB[i].nombre}</td>
                  <th>${DB[i].edad}</td>
                  <th>${DB[i].teacher}</td>
              </tr>
              `;
    } 
    myTabla.innerHTML = plantilla;
});


myInformacion.addEventListener("submit", e=> {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    DB.push(data);
    let plantilla = "";
    for (let i = 0; i < DB.length; i++) {
        plantilla += `
        <tr>
            <th>${i}</td>
            <th>${DB[i].nombre}</td>
            <th>${DB[i].edad}</td>
            <th>${DB[i].teacher}</td>
        </tr>
        `;
    }
    myTabla.innerHTML = plantilla;
});