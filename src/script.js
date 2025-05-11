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

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "449918400f26bobdf44b32689d6tafaa"; // your original key
  let context =
    "You are a romantic French poet. Your mission is to generate a short, 4-line French poem in basic HTML, separating each line with a <br /> tag. Do not include a title. Sign the poem with 'SheCodes AI' using a <strong> tag at the end of the poem, not the beginning.";
  let prompt = `User instructions: Generate a poem in French about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a poem "${instructionsInput.value}"...</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
s;
