/*variables a utilizar*/
var totalP = 0;//variable para guardar el total a pagar
var selectCombo = false;//variable para saber si se selccionó algun elemento
var precioFinal = 0; //variable para guardar el precio final con la aplicacion del redondeo

function iniciar(){

    //imprimiendo el total a pagar en el input text
    var total = document.getElementById('totalpagar');
    total.value = "7.25";

    //capturando el div que muestra el mensaje
    var suger = document.getElementById('suger');
    //capturando el textArea del mensaje
    var msg = document.getElementById('mensaje');
    //capturando al boton de enviar
    var btnEnviar = document.getElementById('benviar');
    //capturando los elementos con los combos y productos
    var combo1 = document.getElementById('rb1');
    var combo2 = document.getElementById('rb2');
    var combo3 = document.getElementById('rb3');
    var product1 = document.getElementById('rb4');
    var product2 = document.getElementById('rb5');
    var product3 = document.getElementById('rb6');
    var product4 = document.getElementById('rb7');
    var product5 = document.getElementById('rb8');
    var product6 = document.getElementById('rb9');
    var product7 = document.getElementById('rb10');
    var product8 = document.getElementById('rb11');
    var product9 = document.getElementById('rb12');
    var product10 = document.getElementById('rb13');

    //evento click para el boton enviar
    if(btnEnviar.addEventListener){
        btnEnviar.addEventListener("click", function(){
            Seleccioncombo();
            motrarRespuesta();
        }, false);
    }
    else if(btnEnviar.attachEvent){
        btnEnviar.attachEvent("onclick", function(){
            Seleccioncombo();
            motrarRespuesta();
        });
    }

    //evento click para el div del mensaje y con ello habilitar la edición
    if(suger.addEventListener){
        suger.addEventListener("click", Editar, false);
    }
    else if(suger.attachEvent){
        suger.attachEvent("onclick", Editar);
    }

    /*Creando los eventos para editar o guardar el area de texto sugerencias */
    if(document.addEventListener){

        /*evento keydown para guaradar o editar*/
        document.addEventListener('keydown', function(evt){

            /*Asignando las teclas al evento*/
            evt = evt || event;

            /*Validando que la combinación sea ctrl + E para editar el mensaje*/
            if((evt.ctrlKey && evt.keyCode == 'E'.charCodeAt(0)) && !msg.offsetHeight){
                /*llamando a la funcion para editar el mensaje */
                Editar();
                if(evt.preventDefault) evt.preventDefault();
                evt.returnValue = false;
                return false;
            }

            /*Validando que la combinación sea ctrl + S para guardar el mensaje*/
            if((evt.ctrlKey && evt.keyCode == 'S'.charCodeAt(0)) && msg.offsetHeight){
                /*llamando a la funcion para guardar el mensaje */
                Guardar();
                if(evt.preventDefault) evt.preventDefault();
                evt.returnValue = false;
                return false;
            }

        }, false);

        /*Evento para navegadores antiguos */
    }else if(document.attachEvent){
        document.addEventListener('onkeydown', function(evt){
            
            /*Asignando las teclas al evento*/
           evt = evt || event;

            /*Validando que la combinación sea ctrl + E para editar el mensaje*/
            if((evt.ctrlKey && evt.keyCode == 'E'.charCodeAt(0)) && !msg.offsetHeight){
            /*llamando a la funcion para editar el mensaje */
                Editar();
                return false;
            }

            /*Validando que la combinación sea ctrl + S para guardar el mensaje*/
            if((evt.ctrlKey && evt.keyCode == 'S'.charCodeAt(0)) && msg.offsetHeight){
                /*llamando a la funcion para guardar el mensaje */
                Guardar();
                return false;
            }
        });

        
    }


    /*Funcion utilizada para editar el mensaje*/
    function Editar(){
        //aplicando propiedades de estilo
        suger.style.display = 'none';
        msg.value = suger.innerHTML;
        msg.style.display = 'block';
        msg.style.height = '80px';
        msg.style.padding = '6px';
        msg.style.width = '99%';
        msg.focus();
        
    }

    /*Funcion utilizada para guardar el mensaje*/
    function Guardar(){
        //aplicando propiedades de estilo
        msg.style.display = 'none';
        suger.innerHTML = msg.value;
        suger.style.display = 'block';
        suger.style.letterSpacing = '1.2px';
    }


    /* Proceso para generar el evento click de los combos o productos seleccionados */
    //capturando todos los elementos que contengan la clase rbt
    var selctElement =document.querySelectorAll('.rbt');

    //recoriendo los elementos con la clase rbt
    for(var i=0;i<selctElement.length;i++)
    {
        //generando el evemto click
        selctElement[i].addEventListener("click", function()
        {
            //llamando a la funcion que permite actualizar el total a pagar
            determinarPrecios();  

        }, false); 
    }

    
    /*Funcion para saber si seleccionó algun combo u producto*/
    function Seleccioncombo(){

        /*Capturando todos los elementos que contengan la clase rbt */
        var br =document.querySelectorAll('.rbt');

        /*Recorriendo los controles */
        for(var i=0;i<br.length;i++)
        {
            /*Comprobando que lamenos este seleccionado un elemento */    
            if(br[i].checked == true){
                //actualizando la variable que indica si se selccionó un combo u producto
                selectCombo = true;
            }   

        }

        /*si no se leccionó un combo u producto se notifica al usuario */
        if(selectCombo == false){
            alert('Debe seleccionar almenos un combo u producto');
        }else{
            //llamando a la funcion para generar el total a pagar
            determinarPrecios();
        }

       //actualizando la variable a falso, la cual indica si se selccionó un combo u producto 
        selectCombo = false;

    }



    /*funcion para saber cuales son los elementos que seleccionó un usuario y calcular el total a pagar*/
    function determinarPrecios(){

        totalP = 0;

        if(combo1.checked == true){
            totalP = totalP + 7.25;
        }

        if(combo2.checked == true){
            totalP = totalP + 5.75;
        }

        if(combo3.checked == true){
            totalP = totalP + 3.50;
        }

        if(product1.checked == true){
            totalP = totalP + 1.50;
        }

        if(product2.checked == true){
            totalP = totalP + 1.25;
        }

        if(product3.checked == true){
            totalP = totalP + 1.75;
        }

        if(product4.checked == true){
            totalP = totalP + 1.50;
        }

        if(product5.checked == true){
            totalP = totalP + 1.25;
        }

        if(product6.checked == true){
            totalP = totalP + 1.50;
        }

        if(product7.checked == true){
            totalP = totalP + 1.25;
        }

        if(product8.checked == true){
            totalP = totalP + 1.0;
        }

        if(product9.checked == true){
            totalP = totalP + 0.50;
        }

        if(product10.checked == true){
            totalP = totalP + 1.25;
        }

        /*llamando a la funcion para redondear el total a pagar */
        convertirTotal();
        

    }

    /*Funcion para el redondeo del total a pagar*/
    function convertirTotal(){

        //proceso para redondear el total haciendo uso de toFixed 
        precioFinal = totalP.toFixed(2); 

        //imprimiendo el total a pagar en el input text
        var total = document.getElementById('totalpagar');
        total.value = precioFinal;

    }


    //Creando el objeto orden con el constructor Object()
    var orden = new Object();

    //creando atributos del objeto para guardar los datos de la orden
    orden.seleccionados = new Array();
    orden.sugerencia = "";
    orden.total = 0; 
 

    //funcion para guardar los datos en el objeto y mostrarlos
    function motrarRespuesta(){

        var k = 0; 
        var factura = document.getElementById('Detalles');
        var detalles  = "";

        /*Capturando todos los elementos que contengan la clase rbt */
        var prod =document.querySelectorAll('.rbt');

        /*Recorriendo los controles */
        for(var i=0;i<prod.length;i++)
        {
            /*Comprobando que almenos este seleccionado un elemento */    
            if(prod[i].checked == true){

                //guardando en la propiedad de tipo array los elementos seleccionados por el usuario
                orden.seleccionados[k] = prod[i].value;

                k++;
            }   

        }

        //validando si el usuario realizó alguna sugerencia y guardando el valor en la propiedad del objeto
        
        if(msg.value == ""){
            orden.sugerencia = "No Realizó comentarios.";
        }else{
            orden.sugerencia = msg.value;
        }
        
        //guardando el total a pagar en la propiedad del objeto
        orden.total = precioFinal;

        //guardando en la variable detalles todo lo que el usuario compró

        detalles += "<h2> El detalle de su compra es:</h2>";

        detalles += "<p>";
        
        //recorriento la propiedad de tipo array para mostrar los productos y combos adquiridos
        for(var h = 0; h < orden.seleccionados.length; h++){
            detalles += "* " + orden.seleccionados[h]+". <br/>";
        }

        detalles += "</p>";

        detalles += "<p><b>Total a pagar: $</b>"+ orden.total +"</p>";
        detalles += "<hr>";
        detalles += "<h2> Sus sugerencias son:</h2>";
        detalles += "<p>"+ orden.sugerencia +"</p>";

        //mostrando el div con los detalles y colocando los datos
        factura.style.display = "block";
        factura.innerHTML = detalles;

    }

}


//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
    window.attachEvent("onload", iniciar);
}