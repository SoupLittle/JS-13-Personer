const ansatt = [
  {
    name: "Laila Johanne Handelsby",
    role: "Rektor",
    image: "img/rektor-laila-handelsby.jpg"
  },
  {
    name: "Torben Andersen",
    role: "Assisterende rektor",
    image: "img/torben-gjerstad.jpg"
  },
  {
    name: "Martin Sandø-Frank",
    role: "Studieleder",
    image: "img/martin-frank.jpg"
  },
  {
    name: "Cathrine Mannsaker",
    role: "Undervisningsleder",
    image: "img/cathrine-mannsaaker.jpg"
  },
  {
    name: "Anette Øwre Bollvåg",
    role: "Undervisningsleder",
    image: "img/anette-owre-bollvag.jpg"
  },
  {
    name: "Anne Raastad-Hoel",
    role: "Undervisningsleder",
    image: "img/anne-raastad-hoel.jpg"
  },
  {
    name: "Erik Bergerud",
    role: "Undervisningsleder",
    image: "img/erik-bergerud.jpg"
  },
  {
    name: "Camilla Engberg",
    role: "Undervisningsleder",
    image: "img/camilla-engberg.jpg"
  },
  {
    name: "Sissel Moen",
    role: "Administrasjonsleder",
    image: "img/sissel-moen.jpg"
  }
];


TODO:

document.getElementById('name').addEventListener('input', function () {
  const inputName = this.value.trim().toLowerCase();

  // Find the matching person in the array
  const matchingPerson = ansatt.find(person => person.name.toLowerCase() === inputName);

  // Update the result container
  const resultContainer = document.getElementById('resultContainer');
  resultContainer.innerHTML = '';

  if (matchingPerson) {


    const resultImage = document.createElement('img')
    resultImage.src = matchingPerson.image
    resultImage.alt = matchingPerson.name
    resultImage.className = 'result-image'

    const resultName = document.createElement('div')
    resultName.textContent = matchingPerson.name
    resultName.className = 'result-name'

    const resultRole = document.createElement('div')
    resultRole.textContent = matchingPerson.role
    resultRole.className = 'result-role'

    // const resultText = document.createElement('text')
    // resultRole.textContent = matchingPerson.text
    // resultRole.className ='result-text'

    resultContainer.appendChild(resultImage);
    resultContainer.appendChild(resultName);
    resultContainer.appendChild(resultRole);
    // resultContainer.appendChild(resultText)
  }
});
