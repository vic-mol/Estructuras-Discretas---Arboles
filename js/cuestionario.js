preguntas=[
["¿Cuántas formas existen para recorrer un árbol en profundidad?",
"3.",
"2.",
"1.",
"4."],

["¿Dos formas de recorrer un árbol en profundidad?",
"Inorden y Postorden.",
"Preorden y por método de subárbol.",
"Inorden y por Gauss.",
"Postorden y orden."],

["Para recorrer un árbol o subárbol en Preorden primero se: .",
"Recorre la raíz r.",
"Recorre en preorden el hijo h.",
"Recorre el segundo hijo de r hasta el hijo de la extrema derecha.",
"Recorre en inorden el hijo a la izquierda de la raíz."],

["El recorrido en preorden de un árbol o subárbol solo se ejecuta si: ",
"La raíz tiene hijos.",
"El programa compila.",
"Es un árbol rojinegro.",
"Es un árbol binario."],

["Primer paso para recorrer un árbol o subárbol en Inorden: .",
"Recorrer, en inorden, el hijo a la izquierda de la raíz.", 
"Recorrer, en inorden, el hijo h.",
"Recorrer, en postorden, el hijo h.",
"Agregar hijos a la raíz."],

["¿Qué se debe cumplir para ejecutar el recorrido, en inorden, de un árbol o subárbol?",
"La raíz debe de tener hijos.",
"La raíz deberá tener por lo menos 15 hijos.",
"Deberá ser un árbol binario.",
"Recorrer en postorden la raíz de la extrema derecha, en preorden."],

["Primer paso a realizar cuando se quiere recorrer en postorden un árbol o subárbol: ",
"Recorrer, en postorden, el hijo h a partir del hijo a la izquierda de la raíz´hasta la derecha.",
"Abrir el IDE.",
"Compilar programa.",
"Recorrer la raíz de la extrema derecha en preorden."],

["El recorrido en postorden sólo se ejecuta si y solo si: ",
"La raíz´tiene hijos.",
"Es un árbol binario.",
"Es un árbol rojinegro.",
"La raíz tiene por lo menos 5 hijos."],

["Otro nombre para el recorrido en anchura: ",
"Por niveles.",
"Por diámetro.",
"Por grosor.",
"Por pasos."],

["En el recorrido en anchura se recorren ______ los nodos del árbol desde i=0 hasta P. Donde P=profundidad",
"Todos.",
"Algunos de.",
"Salteados.",
"Aleatoriamente."],

["Primer nodo en recorrerse en un recorrido por niveles: ",
"La raíz.",
"El primer hijo.",
"El último hijo.",
"Cualquier nodo."],

["Proceso de visitar cada nodo de un árbol exactamente una vez: ",
"Recorrido de árbol.",
"Encuesta.",
"Senso.",
"Visitación."],

["Un grafo dirigido acíclico en el que todos los nodos tienen grado de entrada 1 (excepto el de grado cero), y grado de salida cero o mayor que cero",
"Árbol.",
"Pila.",
"Lista ligada.",
"Ninguna de las anteriores."],

["Nombre de cualquier nodo de un árbol con grado de salida cero",
"Hoja.",
"Raíz.",
"Pila.",
"Ninguna de las anteriores."],

["El único nodo de un árbol que tiene grado de entrada cero: ",
"Ráiz.",
"Primer hijo.",
"Último hijo.",
"Ninguna de las anteriores."],

["Sucesión de nodos en un árbol, desde n=1 hasta n=i. ",
"Camino.",
"Descendientes.",
"Serie.",
"Ninguna de las anteriores."],

["Al nodo n(i) se le denomina ______ de n(j) si existe un camino de n(i) a n(j), siendo n(j) el descendiente.",
"Ancestro.",
"Descendiente.",
"Sucesor.",
"Heredero."],

["Al nodo n(j) se le denomina ______ de n(i) si existe un camino de n(i) a n(j), siendo n(i) el ancestro.",
"Descendiente.",
"Ancestro.",
"Vecino.",
"Receptor."],

["Se le define ______ a un nodo de un árbol compuesto por ese mismo nodo y todos sus descendientes. ",
"Subárbol.",
"Árbol.",
"Raíz.",
"Hoja."],

["Nombre de la palabra que define ______ de un nodo como la longitud del camino más largo desde ese nodo a cualquier hoja",
"La altura",
"El recorrido",
"El desplazamiento",
"El máximo"],

["La ______ de un árbol también se define como la altura de la raíz.",
"Altura.",
"Anchura.",
"Longitud.",
"Profundidad."],

["La ______ de un nodo es la longitud del único camino que existe entre ese nodo y la raíz",
"Profundidad.",
"Altura.",
"Anchura.",
"Relación."],

["Si existe un árbol de altura 57, ¿en qué nivel se encuentra la raíz?",
"0.",
"1.",
"57.",
"Se necesita ver el árbol para identificarlo."],

["¿En qué nivel se encuentra la raíz siempre?",
"Cero.",
"Uno",
"Penúltimo",
"Último."],

["Un recorrido por niveles o en preorden siemrpe inicia con: ",
"La Raíz.",
"La(s) hoja(s)",
"El primer hijo a la izquierda de la raíz.",
"El segundo hijo de la raíz."],

["¿Cuales dos recorridos no comienzan con la raíz´?",
"Postorden e inorden.",
"Niveles e inorden.",
"Preorden y postorden.",
"Postorden y niveles."],

["¿Cual de estos recorridos comienza siempre con un nodo hoja?",
"Postorden.",
"Inorden.",
"Niveles.",
"Preorden."],

["¿Cual de estos recorridos comienza siempre con la raíz?",
"Preorden.",
"Inorden.",
"Postorden.",
"Ninguna de las anteriores."],

["¿Cual de estos recorridos comienza siempre con la raíz?",
"Niveles.",
"Postorden.",
"Inorden.",
"Ninguna de las anteriores."],

["Los recorridos preorden y por niveles inician siempre con ______",
"La raíz.",
"El primer hijo.",
"Una hoja.",
"Cualquier nodo."],

["En el recorrido en postorden este nodo es el último en ser recorrido.",
"Raíz",
"Primer hijo.",
"Hoja.",
"Segundo hijo."],];

$(document).ready(function () {
	$("#calificacion").hide();
	seleccionadas=[];
	contador=0;
	while(contador<10)
	{
		numero=Math.floor(Math.random()*(30-0+1))+0;
		if(seleccionadas.indexOf(numero)==-1)
		{
			seleccionadas.push(numero);
			contador+=1;
		}
	}
	
	respuestas=[];
	for(i=0;i<10;i++)
	{
		document.getElementById("h"+i).innerHTML=(i+1)+".-"+preguntas[seleccionadas[i]][0];
		numero=Math.floor(Math.random()*(4))+1;
		respuestas.push(numero);
		for(j=0;j<4;j++)
		{
			document.getElementById("l"+i+j).innerHTML=preguntas[seleccionadas[i]][numero];
			numero+=1;
			if(numero==5)
			{
				numero=1;
			}
		}
	}
});

function evaluar()
{
	$("#preguntas").hide("slow");
	$("#calificacion").show("slow");
	
	puntuacion=0;
	
	for(i=0;i<10;i++)
	{
		correcta=respuestas[i]
		if(correcta!=1)
		{
			correcta=6-correcta;
		}
		correcta-=1;
		if(document.getElementById("r"+i+correcta).checked)
		{
			puntuacion+=1;
		}
	}
	
	document.getElementById("puntuacion").innerHTML="La puntuación obtenida es: "+puntuacion;
}
