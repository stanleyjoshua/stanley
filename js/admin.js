 	$(document).ready(function() {
        if (typeof(localStorage) === 'undefined' ) {
            alert('Your browser does not support HTML5 localStorage');
        } else {
					
            getItems(); 
        }
    });
	
var getItems = function() {
	
       var timeLog, logLength, i;				
        i = 0;
        logLength = localStorage.length-1; 
         timeLog = '';

      
        for (i = 0; i <= logLength; i++) {
	
          

          var itemKey, value, values, usn, pswd;
            
            itemKey = localStorage.key(i);
						
            value = localStorage.getItem(itemKey);
	values = JSON.parse(value);
             usn = values.uname;
             pswd = values.pwd;
					
	





            
            timeLog += '<tr id="'+itemKey+'" class="tableRow"><td>'+usn+'</td><td>'+pswd+'</td></td></tr>';
        }

        $("#theLog").append(timeLog); 
				
				$(".tableRow").mouseenter(function() {
								$(this).children().children(".delete").show();
					});
				$(".tableRow").mouseleave(function() {
								$(this).children().children(".delete").hide();
					});
				
				$("#reset_list").click(function() {
								//alert("clicked");
								localStorage.clear();
								getItems(); 
					});
				
			$(".delete").click(function() {
								var itemId = $(this).parent().parent().attr('id');								
								//alert(itemId);
								localStorage.removeItem(itemId);
								getItems(); 
					});
    }