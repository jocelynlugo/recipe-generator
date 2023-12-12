function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function displayError(error) {
  let recipeElement = document.querySelector("#recipe");
  recipeElement.innerHTML = `Please try again!`;
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "oaf35ec85ab9436b73053b0e51t48cf9";
  let prompt = `Generate a quick and easy recipe about ${instructionsInput.value}`;
  let context = `You are a expert at cooking and love to provide easy, quick meals. Your mission is to provide quick and easy recipes in basic HTML.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class ="blink">⌛ Generating a easy recipe about ${instructionsInput.value}!</div>`;

  axios.get(apiUrl).then(displayRecipe).catch(displayError);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
