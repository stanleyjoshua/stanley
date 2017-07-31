$(document).ready(function() {
        if (!window.localStorage) {
            alert('Your browser does not support HTML5 localStorage. Try upgrading.');
        } else {
            $("#return_form").submit(function(){
	                    setAllItems();
            });						
	}
});

var setAllItems = function(){
	var newDate, itemId, formSave;
	newDate = new Date();
        itemId = newDate.getTime();
        formSave = {
        	uname : $("input[name='username']").val(),
        	pwd : $("input[name='password']").val()
        	
		
		};				
	// turn data into JSON string
	localStorage.setItem( itemId, JSON.stringify(formSave));
	};