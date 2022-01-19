let products=[];
let total= 0;


function add(product, price){

console.log(product, price);
products.push(product);
total = total + price;
document.getElementById("checkout").innerHTML = `Pagar $${total}`

}

const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';

const telefono = '542634256064';


function pay(){
    
    let prod = products.join(", \n")
    let mensaje = 'send?phone=' + telefono + '&text=*_Formulario By Palacio Nahuel*%0A*¿Cuales son tus productos?*%0A' + prod + '%0A*EL PRECIO TOTAL ES*%0A' + total + ""
    window.open(urlDesktop + mensaje, '_blank')
}




