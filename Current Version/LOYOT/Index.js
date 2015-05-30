/* function to make additions to the code */

(function () { 
	"use strict"; 
	var returnToBackend = [0, 0]; 

	window.onload = function() { 
			
		// Section of code that will retrieve the txt file from the server
			//var ajax = new XMLHttpRequest(); 
			//ajax.onload = create(); 
			//ajax.open("GET", "text.txt", true);
			//ajax.send(null); 

			var radios = document.getElementsByName("1");  
			for(var i = 0; i < radios.length; i++) { 
				radios[i].onchange = getlevel2; 			
			}

		};

	function create() { 
		if(this.status == 200) { 
			var data = this.responseText.split("\n");
			for(var i = 0; i < data.lenght; i++)
			{
				newInformation(data[i]); 
			}
		}
	}

	function newInformation(data)
	{
		var depth = 1; 
		var info = data.split(":");
		var levels = info[0].split(","); 
		var title = info[1];  
		
		document.getElementById(levels[depth]).appendChild(createRadioElement(levels, title)); 
	}

	function getlevel2() { 
			//var math = ["Algebra", "Calculus", "Statistics"]; 
			// add data to array

			returnToBackend[0] = this.value;			 
			//document.getElementById("second").style.visibility = 'visible'; 

			// Grab correct second level tabs
			
			var radios = document.getElementsByName("2");	// second level so Name = 2  
			for(var i = 0; i < radios.length; i++) { 
				if(radios[i].getAttribute("class") == this.value){
					radios[i].onchange = getlevel3; 
				}
							
			}
	}

	function getlevel3() { 
		returnToBackend[1] = this.value; 
		//document.getElementById("third").style.visibility = 'visible'; 

		//var radios = document.getElementsByName("3");	// second level so Name = 2  
			//for(var i = 0; i < radios.length; i++) { 
				//if(radios[i].getAttribute("class") == this.value){
					//radios[i].onchange = getlevel3;
					//returnToBackend[2] = radios[i].getAttribute("class");
					 
				//}
							
			//}
	}

	function createRadioElement(array, title)
	{
		var radioHtml = '<input type="radio" class="' + array[0] + '"' + ' name="' + array[1] + '"' + 
		' value="' + array[2] + '"';
	    radioHtml += '/>';
	    radioHtml += ' ' + title; 


	    var radioFragment = document.createElement('li');
	    radioFragment.innerHTML = radioHtml;

	    return radioFragment.firstChild;
	}

	function initBackEnd() { 
		var submitTag = document.getElementById("content"); 
		var arrayRepresentation = document.createElement('div'); 
		arrayRepresentation.innerHTML = "$submitBack = [" + returnToBackend[0] + "," + returnToBackend[1] + "]"; 

		submitTag.appendChild(arrayRepresentation.firstChild); 
	}

} ()); 