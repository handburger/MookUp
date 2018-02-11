// Variables

const ingredientInput = $("#ingredient-adder");
const ingredientBtn = $("#ingredient-btn");
const ingredientWarning = $("#ingredient-warning");
const ingredientBox = $("#box-with-ingredients");
const ingredientUl = $("#ingredient-ul");

let ingredients = [];

// Handlers / functions

ingredientBtn.click(addIngredient);

ingredientInput.keypress(function(event){
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
		addIngredient();
	}
});

function addIngredient() {
	if (ingredientInput.val().length > 0) {
		ingredients.push(ingredientInput.val());

		ingredientInput.val('');

		let lastIngredient = ingredients[ingredients.length -1];

		ingredientUl.append("<li class='ingredient-li'>"+"<span>"+lastIngredient+"<span>"+"</li>");

		if(ingredients.length > 0) {
			ingredientBox.show();
		}
	}
}

ingredientBox.hide();








// Old handlers and functions

/*ingredientInput.keypress(function(event){
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
		addIngredient();
	}
});

$(".fa-trash-o").click(function() {
	
});


ingredientBtn.click(addIngredient);

ingredientBox.hide();

function addIngredient() {
	if(ingredientInput.val().length > 0) {
		let ingredientElement = "<li class='ingredient-li'>"+"<span>"+ingredientInput.val()+"</span>"+"<span><i class='fa fa-trash-o' aria-hidden='true'></i></span>"+"</li>";
		ingredientUl.append(ingredientElement);
	}

	if (ingredientUl[0].childElementCount > 0) {
		ingredientBox.show();
	}
}*/