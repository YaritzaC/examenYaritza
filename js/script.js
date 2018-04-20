function mostrar() {
	document.getElementById("iframee").src="ventas.html";
}
var i = 0, ri = 0, m = "";
function agregar(){
 i++;
var tb = document.getElementById("data");
var pre = document.getElementById("precio").value;
var cant = document.getElementById("cantidad").value;
var producto = document.getElementById("bolsap").value; 
var subtotal = parseInt(parseInt(pre)*parseInt(cant));
console.log(bolsap.value);
var opc = bolsap.options[bolsap.selectedIndex];  
var fila="<td>"+i+"</td>"+producto+"</td><td>"+pre+"</td><td>"+cant+"</td><td>"+subtotal+"</td><td><a href='#' onclick='eliminar(this)'><img src='iconos/d.png'>";
var fil = document.createElement("tr");
fil.innerHTML=fila;
tb.appendChild(fil);
mensaje("Registro guardado correctamente");  
}
function eliminar(p){   
    var opcion = confirm("¿Desea eliminar esta compra?");
    if (opcion == true) {
        var i = p.parentNode.parentNode.rowIndex;
        document.getElementById("data").deleteRow(i);
        alert("Eliminado correctamente");        
    } else {
        alert("¡Ups!..Ocurrió un error");     
    }
}