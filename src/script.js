function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  //build the API URL
  // Make a call
  // Display the generated poem
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "449918400f26bobdf44b32689d6tafaa";
  let prompt = "Generate a poem about flowers";
  let context = "Write a poem about a rose and a tomb";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
