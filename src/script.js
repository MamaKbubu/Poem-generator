function generatePoem(event) {
  event.preventDefault();

  //build the API URL
  // Make a call
  // Display the generated poem

  let apiKey = "449918400f26bobdf44b32689d6tafaa";
  let prompt = "";
  let context = "Write a poem about a rose and a tomb";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  axios.get(apiURL).then(displayPoem);
}
function displayPoem(response) {
  let poem = response.data.poem;
  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = poem;
  poemElement.classList.remove("hidden");
  poemElement.classList.add("poem");
  let poemTitle = document.querySelector("#poem-title");
  poemTitle.innerHTML = "La tombe dit à la rose";
  poemTitle.classList.remove("hidden");
  poemTitle.classList.add("poem-title");
  let poemAuthor = document.querySelector("#poem-author");
  poemAuthor.innerHTML = "by SheCodes AI";
  poemAuthor.classList.remove("hidden");
  poemAuthor.classList.add("poem-author");
  let poemFormElement = document.querySelector("#poem-generator-form");
  poemFormElement.classList.add("hidden");
  let poemFormButton = document.querySelector("#poem-generator-button");
  poemFormButton.classList.add("hidden");

  new Typewriter("#poem", {
    strings: "La tombe dit à la rose",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
