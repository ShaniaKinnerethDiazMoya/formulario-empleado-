const FRMEMPLEADO=document.querySelector("#frmEmpleado");
FRMEMPLEADO.addEventListener("submit", calcularSueldo)
function calcularSueldo(evt){
    evt.preventDefault();
    let nom = document.querySelector("#txtNombre").value;
    let hrstra = document.querySelector("#txtHorasTrabajadas").value;
    let sueldohrs = document.querySelector("#txtSueldoHora").value;
    let tipoemp = document.querySelector("#cmbTipoTra").value;
    let hrsExtra = 0;
    let total;
    
    let toot;
    
    if(hrstra>0 && hrstra<=40){
        sueldosin=hrstra*sueldohrs; 
        let imprimir = document.getElementById("resultado")
        imprimir.textContent = `Bienvenido ${nom} Horas trabajadas: ${hrstra} Horas extra: ${hrsExtra} Sueldo Total: ${sueldosin}`;
    }else if(hrstra<0){
        alert("no puede tener numeros negativos");
        return false;
    }

    if(hrstra>0 && hrstra>40){
        sueldoCuarenta=40*sueldohrs; 
        if(tipoemp=="tipoUno"){
            hrsExtra=hrstra-40;
            total=hrsExtra*sueldohrs*1.5;
            toot=total+sueldoCuarenta;

        }else if(tipoemp=="tipoDos"){
            hrsExtra=hrstra-40;
            total=hrsExtra*sueldohrs*2;
            toot=total+sueldoCuarenta;

        }else if(tipoemp=="tipoTres"){
            hrsExtra=hrstra-40;
            total=hrsExtra*sueldohrs*2.5;
            toot=total+sueldoCuarenta;

        }else if(tipoemp=="tipoCuatro"){
            hrsExtra=hrstra-40;
            total=hrsExtra*sueldohrs*3;
            toot=total+sueldoCuarenta;

        }
        
        let imprimir = document.getElementById("resultado")
        imprimir.textContent = `Bienvenido ${nom} Horas trabajadas: ${hrstra} Horas extra: ${hrsExtra} Sueldo por horas extra:${total} Sueldo Total: ${toot}`;
    }else if(hrstra<0){
        alert("no puede tener numeros negativos");
        return false;
    }
    if(nom===""){
        alert("llene los campos vacios");
        return false;
    }else if (hrstra===""){
        alert("llene los campos vacios")
    }else if (sueldohrs===""){
        alert("llene los campos vacios")
    }


}