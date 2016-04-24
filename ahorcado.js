//numero aleatorio entre un rango de enteros
function patito(minimo, maximo)
{	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );  return numero;   }

//variables, numeroAleatorio; verbosOpciones; tradu o significa; verboespecifico seleccionado aleatoriamente.
var wordNumber = patito(0,14);
var wordOptions = ["abbellire", "abbonire", "abbrunire", "abbrustolire", "abrutire", 
				   "bandire", "barrire", "bipartire", "blandire", "bramire", 
				   "campire", "capire", "carpire", "censire", "chiarire"]; 

var palabra = wordOptions[wordNumber];

document.writeln("Parola: " + matrisc[wordNumber] [0] + " = " + matrisc[wordNumber] [1]);
//alertas de coprobacion
//alert("Parola numero" +" "+ wordNumber);
//alert(palabra +" = "+ matrisc[wordNumber] [tos]);

//imagenes de prueba ahorcado
var graficos = { url: ["soloPoste.png", "soloCabeza.png", "soloTroncoSuperior.png", "soloTroncoInferior.png", "soloPiernas.png", "soloBotas.png" ]}

var impicatto = function (con) 
{   // this son las variables locales de la clase, accesibls en toda la clase.
    //this.contexto es el context de dibujo de cavas, que llega por parametro desde la variable con.
    this.contexto = con;
	this.maximo = 5;
	this.intentos = 0;
	this.vivo = true;
    this.dibujar();	
}


function inicio()
{
	var inaho = document.getElementById("cancan");
    var contexto = inaho.getContext("2d");

	graficos.p = new Image();
   	graficos.p.src = graficos.url[0];
   	graficos.p.onload = dibPoste;
   function dibPoste(){contexto.drawImage(graficos.p, 0, 0);}

   l = document.getElementById("letra");
   var b = document.getElementById("boton")

  	hombre = new impicatto(contexto);
    hombre.dibujar();
    //into mayus the string  
    palabra = palabra.toUpperCase();
    //Decaro un array con n espacios de la palara;
    espacio = new Array(palabra.length);
    // agregamos la función que se dispare al dar click al botón
    b.addEventListener("click", agregarLetra);
    // espacio[1] = palabra[1];
    // espacio[3] = palabra[3];

    mostrarPista(espacio);

}


impicatto.prototype.dibujar = function ()
{

	var dibujo = this.contexto;
	
			graficos.p = new Image();
   			graficos.p.src = graficos.url[0];
   			graficos.p.onload = dibPoste;
    		function dibPoste(){ dibujo.drawImage(graficos.p, 0, 0);}

			graficos.imgn = new Image();
    		graficos.imgn.src = graficos.url[1];
    		graficos.imgn.onload 
    		function drawHead () { dibujo.drawImage(graficos.imgn, 0, 0);}

    		graficos.img = new Image();
    		graficos.img.src = graficos.url[2];
    		graficos.img.onload
    		function drawtrs () { dibujo.drawImage(graficos.img, 0, 0);}
    		
    		graficos.ima = new Image();
    		graficos.ima.src = graficos.url[3];
    		graficos.ima.onload
    		function drawtri () { dibujo.drawImage(graficos.ima, 0, 0);}

    		graficos.iima = new Image();
    		graficos.iima.src = graficos.url[4];
    		graficos.iima.onload
    		function drawlegs () { dibujo.drawImage(graficos.iima, 0, 0);}

    		graficos.imaa = new Image();
    		graficos.imaa.src = graficos.url[5];
    		graficos.imaa.onload
    		function drawboot () { dibujo.drawImage(graficos.imaa, 0, 0);}


    	if (this.intentos > 0) {
    		drawHead();

    		if (this.intentos > 1) {
    			drawtrs();

    			if (this.intentos > 2) {
    				drawtri();

    				if (this.intentos > 3) {
    					drawlegs();

    					if (this.intentos > 4) {
    						drawboot();
    					}
    					
    				}
    				
    			}
    			

    		}
    		
    	}

}



impicatto.prototype.trazar = function () 
{
	this.intentos++;
	if (this.intentos >= this.maximo) 
    {
		this.vivo = false;
		alert("ricarica");
	}	
		this.dibujar();
}


function agregarLetra () 
{
    var letra = l.value;
    l.value = "";    
    mostrarPalabra(palabra, hombre, letra);
}


function mostrarPalabra (palabra, ahorcado, letra) 
{
    var encontrado = false;
    var p;
    letra = letra.toUpperCase();
    for (p in palabra)
    {
        if (letra == palabra[p]) 
            {
                espacio[p] = letra;
                encontrado = true;
            }
    }
    mostrarPista(espacio);

    if (!encontrado)   { hombre.trazar();  }

    if (!ahorcado.vivo)   {  pista.textContent = palabra;  }

}

function mostrarPista(espacio)
{
    var pista = document.getElementById("pista");
    var texto = ""; 
    pista.textContent = texto;
    var i;
    var largo = espacio.length;
    
    for (i = 0; i < largo; i++) 
    {
        if (espacio[i] != undefined) 
        {
            texto = texto + espacio[i] + " ";
        }
        else
        {
            texto += "_ "                
        }
    

    }
    pista.textContent = texto;

}
