const { log } = require("console");
const fs = require("fs"); 
fs.readFile("ventas.txt", "utf8", (error, datos) => {
    var cantidad=[]
    var precio=[]
    var producto=[]
    if (error) {
      console.error("Se ha generado un error al leer el archivo");
    } else {
      const compradores = datos.split("\n"); 
      compradores.forEach((comprador) => {
        const compra = comprador.split(","); 
        cantidad.push(parseInt(compra[1]));
        precio.push(parseFloat(compra[2]));
        producto.push(compra[0]);
      });
    }
    var total=0
    console.log("- - - - - - - - - - - - - - -");
    console.log("VENTAS DEL DÍA");
    console.log("- - - - - - - - - - - - - - -");
    console.log("Vendedor: Nestor Rodriguez Salgado");
    console.log("- - - - - - - - - - - - - - -");
    for (let i = 0; i < cantidad.length; i++) {
        console.log(cantidad[i]," ",producto[i]," ... $",precio[i]);
        total+=precio[i];
    }
    console.log("- - - - - - - - - - - - - - -");
    console.log("VENTA TOTAL  $",total);
    console.log("- - - - - - - - - - - - - - -");
});