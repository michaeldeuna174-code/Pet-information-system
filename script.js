async function fetchPetInfo() {
    const petName = document.getElementById('pet-name');
    const petSpecies = document.getElementById('pet-species');
    const petBreed = document.getElementById('pet-breed');
    const petStatus = document.getElementById('pet-status');
    const petCare = document.getElementById('pet-care');
    const status = document.getElementById('status-indicator');

    
    petName.innerText = "Fetching pet details from JSON Data Source...";
    petSpecies.innerText = "";
    petBreed.innerText = "";
    petStatus.innerText = "";
    petCare.innerText = "";
    status.style.color = "#ffa500";
    status.innerText = "Status: Fetching Data...";

    try {
        
        const response = await fetch('pets.json');
        
        if (!response.ok) {
            throw new Error(`HTTP Error Status: ${response.status}`);
        }

        const pets = await response.json();
        
        
        const pet = pets[Math.floor(Math.random() * pets.length)];

        
        petName.innerText = `🐾 Name: ${pet.name}`;
        petSpecies.innerText = `Species: ${pet.species}`;
        petBreed.innerText = `Breed: ${pet.breed} (${pet.age_years} yrs old)`;
        petStatus.innerText = `Adoption Status: ${pet.status}`;
        petCare.innerText = `Care Tip: "${pet.care_tip}"`;

        status.style.color = "#28a745";
        status.innerText = "Status: Data Retrieved Successfully! (HTTP 200 OK)";

    } catch (error) {
        console.error("Integration Error:", error);
        petName.innerText = "Unable to load JSON data source.";
        status.style.color = "#dc3545";
        status.innerText = "Status: Connection Failed!";
    }
}