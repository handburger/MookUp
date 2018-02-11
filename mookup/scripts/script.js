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