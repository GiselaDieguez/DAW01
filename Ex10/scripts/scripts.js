document.addEventListener("DOMContentLoaded", () => {
    const resultsDiv = document.getElementById("results");
    const getAllCharactersButton = document.getElementById("getAllCharacters");
    const filterCharactersButton = document.getElementById("filterCharacters");

    getAllCharactersButton.addEventListener("click", () => {
        fetchCharacters();
    });

    filterCharactersButton.addEventListener("click", () => {
        const name = document.getElementById("name").value;
        const status = document.getElementById("status").value;
        const species = document.getElementById("species").value;
        const type = document.getElementById("type").value;
        const gender = document.getElementById("gender").value;
        fetchCharacters({ name, status, species, type, gender });
    });

    function fetchCharacters(filters = {}) {
        let url = 'https://rickandmortyapi.com/api/character/';
        const query = new URLSearchParams(filters).toString();
        if (query) url += `?${query}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    resultsDiv.innerHTML = `<p>Error: ${data.error}</p>`;
                } else {
                    displayCharacters(data.results);
                }
            })
            .catch(error => {
                resultsDiv.innerHTML = `<p>Error fetching characters: ${error.message}</p>`;
            });
    }

    function displayCharacters(characters) {
        resultsDiv.innerHTML = '';
        characters.forEach(character => {
            const characterDiv = document.createElement('div');
            characterDiv.className = 'character-card';
            characterDiv.innerHTML = `
                <h3>${character.name}</h3>
                <p>Status: ${character.status}</p>
                <p>Species: ${character.species}</p>
                <p>Gender: ${character.gender}</p>
                <img src="${character.image}" alt="${character.name}">
            `;
            resultsDiv.appendChild(characterDiv);
        });
    }
});
