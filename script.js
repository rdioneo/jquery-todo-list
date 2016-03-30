$(document).ready(function() {


	 $("#addItem").on('click', function(){
	 	var value = $(elem).val()
		$('body').append('<li>' + value + '</li>');
		$(elem).val('');


	 	event.preventDefault();
	        $("#list").append(" <li></li> ");
	    });


});



	






// ##How to get started

// 1. Start by constructing a basic `index.html` page as your starting point.

// 2. Load the CDN for jQuery

// 3. Setup your form to capture a task name. You can include a button to be 
// part of the form to have many ways to submit.

// 4. Use an `<ul>` or `<ol>` as a tag you can append into.

// 5. Setup the `on()` action for the form to use that data to append to the todo list. 
// Use a combination of `var newThing = $("<li></li>")`  for creating elements 
// and `newThing.appendTo("#content")` for adding to the page.

// 6. Add `x` buttons and set event handlers on them such that click on them removes 
// the appropriate todo item, with `$(this).remove()`.


// * Use **event delegation** so that clicking the `x` or other buttons removes the item. 
// This will require setting up a click event on the main todoList container, 
// and using `.on("click", ".childItemSelector", function() {})` to watch 
// for behavior on newly appended items.