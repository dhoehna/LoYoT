/* function to make additions to the code */

var returnToBackend = [0, 0]; 

/*--------------------------------------------------------------------------
  When window loads function() will check if any of the level 1 tags have 
  been clicked. If clicked will send information to getlevel2 function.
  Pre-Condition: Click a level 1 tag
  Post-Condition: Get sent to getlevel2() function
*/
window.onload = function() { 
	var radios = document.getElementsByName("1");  
		for(var i = 0; i < radios.length; i++) { 
			radios[i].onchange = getlevel2; 			
		}

};

function hello()
{
		alert("Hello");
}

/*--------------------------------------------------------------------------
  getlevel2()
  Adds the approriate level 1 information to the array. And checks if level 2 
  tags are clicked on.  
  Pre-Condition: Click a level 2 tag
  Post-Condition: Get sent to getlevel3() function
*/
function getlevel2() { 
		returnToBackend[0] = this.value;			 
		returnToBackend[1] = 0; 			
		var radios = document.getElementsByName("2");	// second level so Name = 2  
		for(var i = 0; i < radios.length; i++) { 
			if(radios[i].getAttribute("class") == this.value){
				radios[i].onchange = getlevel3; 
			}
						
		}
}

/*--------------------------------------------------------------------------
  getlevel3()
  Just adds approriate level 2 tags to the array.
  This is were information about farther levels goes.   
  Pre-Condition: Click a level 2 tag
  Post-Condition: Adds approiate tag to array
*/
function getlevel3() { 
	returnToBackend[1] = this.value; 
}

/*--------------------------------------------------------------------------
  initBackEnd()
  Sends back the array to the backend by initalizing the $submitBack variable 
  for python
  Pre-Condition: Click submit button
  Post-Condition: initalize $submitBack variable and send post it to the innerHTML
*/
function initBackEnd() { 
	// var submitTag = document.getElementById("content"); 
	// var arrayRepresentation = document.createElement('div'); 
	// arrayRepresentation.innerHTML = " = [" + returnToBackend[0] + "," + returnToBackend[1] + "]"; 
	// submitTag.appendChild(arrayRepresentation.firstChild); 
	$("#MyListOfStuff").val("[" + returnToBackend[0] + "," + returnToBackend[1] + "]");
}

//------------------------------------Beyond-Beta-Release----------------------------
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


// /* function to make additions to the code */

// (function () { 
	// "use strict"; 
	// var returnToBackend = [0, 0]; 

	// /*--------------------------------------------------------------------------
	  // When window loads function() will check if any of the level 1 tags have 
	  // been clicked. If clicked will send information to getlevel2 function.
	  // Pre-Condition: Click a level 1 tag
	  // Post-Condition: Get sent to getlevel2() function
	// */
	// window.onload = function() { 
		// var radios = document.getElementsByName("1");  
			// for(var i = 0; i < radios.length; i++) { 
				// radios[i].onchange = getlevel2; 			
			// }

	// };
	
	// function hello()
	// {
		// alert("Hello");
	// }

	// /*--------------------------------------------------------------------------
	  // getlevel2()
	  // Adds the approriate level 1 information to the array. And checks if level 2 
	  // tags are clicked on.  
	  // Pre-Condition: Click a level 2 tag
	  // Post-Condition: Get sent to getlevel3() function
	// */
	// function getlevel2() { 
			// returnToBackend[0] = this.value;			 
			// returnToBackend[1] = 0; 			
			// var radios = document.getElementsByName("2");	// second level so Name = 2  
			// for(var i = 0; i < radios.length; i++) { 
				// if(radios[i].getAttribute("class") == this.value){
					// radios[i].onchange = getlevel3; 
				// }
							
			// }
	// }

	// /*--------------------------------------------------------------------------
	  // getlevel3()
	  // Just adds approriate level 2 tags to the array.
	  // This is were information about farther levels goes.   
	  // Pre-Condition: Click a level 2 tag
	  // Post-Condition: Adds approiate tag to array
	// */
	// function getlevel3() { 
		// returnToBackend[1] = this.value; 
	// }
	
	// /*--------------------------------------------------------------------------
	  // initBackEnd()
	  // Sends back the array to the backend by initalizing the $submitBack variable 
	  // for python
	  // Pre-Condition: Click submit button
	  // Post-Condition: initalize $submitBack variable and send post it to the innerHTML
	// */
	// function initBackEnd() { 
		// var submitTag = document.getElementById("content"); 
		// var arrayRepresentation = document.createElement('div'); 
		// arrayRepresentation.innerHTML = " = [" + returnToBackend[0] + "," + returnToBackend[1] + "]"; 
		// submitTag.appendChild(arrayRepresentation.firstChild); 
	// }

// //------------------------------------Beyond-Beta-Release----------------------------
	// function create() { 
		// if(this.status == 200) { 
			// var data = this.responseText.split("\n");
			// for(var i = 0; i < data.lenght; i++)
			// {
				// newInformation(data[i]); 
			// }
		// }
	// }

	// function newInformation(data)
	// {
		// var depth = 1; 
		// var info = data.split(":");
		// var levels = info[0].split(","); 
		// var title = info[1];  
		
		// document.getElementById(levels[depth]).appendChild(createRadioElement(levels, title)); 
	// }

	

	// function createRadioElement(array, title)
	// {
		// var radioHtml = '<input type="radio" class="' + array[0] + '"' + ' name="' + array[1] + '"' + 
		// ' value="' + array[2] + '"';
	    // radioHtml += '/>';
	    // radioHtml += ' ' + title; 


	    // var radioFragment = document.createElement('li');
	    // radioFragment.innerHTML = radioHtml;

	    // return radioFragment.firstChild;
	// }

// } ()); 