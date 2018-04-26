var cont=0;
var subP=0;
var igv=0;
var Productos = [];
var Subtotal =0;
var Nombre= [];
var NroCantidad = [];
function MostrarV(){
 document.getElementById("iframee").src="ventas.html"; }
function MostrarL(){
    document.getElementById("iframee").src="logo.html"; }
function Agregar(){
    var producto=document.getElementById("bolsap").value;
    var precio=document.getElementById("precio").value;
    var cantidad=document.getElementById("cantidad").value;
    var tabla=document.getElementById("data");
    var fil=document.createElement("tr");
    if (producto=="Seleccione producto" || precio == "" || cantidad == "") {
        alert("Llene todos los campos")
    }
    else{
        if (Nombre.includes(producto)==true) {
            var pos=Nombre.indexOf(producto);
            var can=NroCantidad[pos];
            tabla.rows[pos+1].cells[2].innerHTML=precio;
            cantidad= parseInt(can)+parseInt(cantidad);
            can=cantidad;
            tabla.rows[pos+1].cells[3].innerHTML=cantidad;
            subP=precio*cantidad;
            tabla.rows[pos+1].cells[4].innerHTML=subP;
            Productos[pos]=subP;
            ImprimirDatos();
            alert("Datos del producto actualizados");
            Limpiar();
        }else{
            SubTotalP();
            cont++;
            var fila="<td>"+cont+"</td><td>"+producto+"</td><td>"+precio+"</td><td>"+cantidad+"</td><td>"+subP+"</td><td><img src='iconos/d.png' onclick='Eliminar(this)'</td>";
            Productos.push(subP);
            Nombre.push(producto);
            NroCantidad.push(cantidad);
            fil.innerHTML=fila;
            tabla.appendChild(fil);
            ImprimirDatos();
            Limpiar();
        }
    }
        
}
function SubTotalP(){
    var precio=document.getElementById("precio").value;
    var cantidad=document.getElementById("cantidad").value;
    subP=precio*cantidad;
}
function ImprimirDatos(){ 
    Subtotal=eval(Productos.join("+"));
    igv=Subtotal*0.18;
    document.getElementById("subtotal").value=Subtotal;
    document.getElementById("igv").value=igv.toFixed(2);  
    document.getElementById("total").value=Subtotal+igv; }
function Eliminar(p){
    var opcion = confirm("¿Desea eliminar esta compra?")
    if (opcion == true) {
        var i = p.parentNode.parentNode.rowIndex;
        document.getElementById("data").deleteRow(i);
        Productos.splice(i-1,1); 
        Nombre.splice(i-1,1);
        ImprimirDatos();
        Limpiar();
        alert("Compra eliminada")
    }
    else{
        alert("Compra no eliminada")
    }
    
}
function Limpiar(){
    document.getElementById("bolsap").value="Seleccione producto";
    document.getElementById("precio").value="";
    document.getElementById("cantidad").value="";
    if(Productos.length==0){
        document.getElementById("subtotal").value=0;
        document.getElementById("igv").value=0;
        document.getElementById("total").value=0;
    } 
}   