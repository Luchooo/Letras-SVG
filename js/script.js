window.onload = function()
{ 


	Letra_Animada();

}


/////////////////CREACIÓN DE LETRAS//////////////////////////////////////////////////////
	function Letra_Animada () {
		var Letra_L=[[60,60], [100, 60], [100,300], [180, 300], [180,340], [60, 340], [60,60]];
		var Letra_U=[[60, 60], [60, 340], [240, 340],[240, 60],[200,60],[200,300],[100,300],[100,60],[60,60]];
		var Letra_C = [[60,60],[60,340],[240,340],[240,300],[100,300],[100,100],[240,100],[240,60],[60,60]];
		var Letra_H = [[60,60], [60, 340], [100, 340], [100, 190], [200, 190], [200,340],[240,340], [240, 60], [200, 60], [200, 150], [100, 150], [100, 60], [60, 60]];  
		var Letra_I = [[60,60], [60, 100], [130, 100], [130, 300], [60, 300], [60,340],[240,340], [240, 300], [170, 300], [170, 100], [240, 100], [240, 60], [60, 60]];  
		var Letra_S = [[60,60], [240, 60], [240, 120], [100, 120], [100, 180], [240,180],[240,340], [60, 340], [60, 280], [200,280], [200, 240], [60, 240], [60, 60]];  
		animar(Letra_U,Letra_L);
//______________________________________________________________________________________________________		

/////////ESCRIBIR EN LETRAS LUIS ///////////////////////////////////////
		nom_div("boton1").addEventListener('click', function(event){
		var aleatorio=Math.random();


			
			var color = "#3399FF";
			var dibujar= SVG('divsvg').size("240",'340');
			var dibujar2= SVG('divsvg').size("240",'340');
			var dibujar3= SVG('divsvg').size("240",'340');
			var dibujar4= SVG('divsvg').size("240",'340');
		
			var Primera_Letra = dibujar.polyline(Letra_L).fill("none").stroke({width : 4, color: '#FF9900'}).attr({ fill: color });
			Primera_Letra.animate(1000).plot(Letra_H).loop(2);

			var Segunda_Letra = dibujar2.polyline(Letra_U).fill("none").stroke({width : 4, color: '#FF9900'}).attr({ fill: color });
			Segunda_Letra.animate(1000).plot(Letra_C).loop(2);

			var Tercera_Letra = dibujar3.polyline(Letra_I).fill("none").stroke({width : 4, color: '#FF9900'}).attr({ fill: color });
			Tercera_Letra.animate(1000).plot(Letra_S).loop(2);

			var Cuarta_Letra = dibujar4.polyline(Letra_S).fill("none").stroke({width : 4, color: '#FF9900'}).attr({ fill: color });
			Cuarta_Letra.animate(1000).plot(Letra_L).loop(2);


//_____________________________________________________________________________________________________
		
		
});

////AGREGAR LETRAS ALEATORIAS

nom_div("Boton_Random").addEventListener('click', function(event){
		var aleatorio=Math.random();
		
		

		if (aleatorio<=0.4) {
			
			animar(Letra_S,Letra_L);
		};

		if (aleatorio>0.4&&aleatorio<=0.7) {
			
			animar(Letra_H,Letra_C);
		};

		if (aleatorio>0.7) {
			animar(Letra_I,Letra_U);
		};
});
//______________________________________________________________________________


	function animar (letrauno,letrados) {
	var color = "#98FB98";
	var dibujar = SVG('divsvg').size("240",'340');
	var image = dibujar.image('./Imagenes/Letreros.png');
    image.size("100%", "100%");
    image.hide();
  
    var letra_1=letrauno;
	var letra_2=letrados;

			
	var continua = dibujar.polyline(letra_1).fill("none").stroke({width : 4, color: '#6495ED'}).attr({ fill: color });
	continua.animate(1000).plot(letra_2).loop();


/////////////////////OPCIONES DE MANIPULACION DE LETRA/////////////////////////////////////////////////////////////


	for(var i = 1; i <= 8; i++)
	{
		
		nom_div("opcion_" + i).addEventListener('change', function(event)
		{
			var ind = event.target.id.split("_");
			switch(Number(ind[1]))
			{
				//Fondo//
				case 1: continua.attr({fill: this.value}); break;
				//Color de Linea//
				case 2: continua.stroke({color : this.value}); break;
				//Grosor de Linea//
				case 3: continua.stroke({width : this.value}); break;
				//Opacidad//
				case 4: continua.attr({opacity: this.value}); break;
				//Rotar Letra//
				case 5: continua.rotate(this.value); break;

				//Escalar Letra//
				case 6: continua.scale(this.value); break;
				
				//Imagen Encriptada//
				case 7: //Mostra máscara..
						if(this.value == 1)
						{
							image.show();
							continua.maskWith(image);
						}
						else
						{
							//continua.remove()
							//image.hide();
							continua.unmask();
							//mask.remove()
						}
						break;

			 
			}
		});
	}



/////////////Boton Controla --> Animar/Detener //////////////
	var animo = true;
	nom_div("controla").addEventListener('click', function(event)
	{
		if(animo)
		{
			this.value = "Continuar";
			continua.pause();
		}
		else
		{
			this.value = "Detener";
			continua.play();

		}
		animo = !animo;
	});
//________________________________________________________________________________
};//Fin de la Funcion Animar();
};//Fin de la Función Letra_Animada();

///////Capturar elementos HTML/////////////////////	
	function nom_div(div)
	{
		return document.getElementById(div);
	}
//___________________________________________________________________________________________	
