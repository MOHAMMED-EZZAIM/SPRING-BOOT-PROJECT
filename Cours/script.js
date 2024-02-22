// Liste des commandes Git
const gitCommands = [
    "git init",
    "git clone",
    "git add",
    "git commit",
    "git push",
    "git pull",
    "git checkout",
    // Ajoutez d'autres commandes Git ici
];

// Sélection de la liste des commandes
const commandsList = document.getElementById("commandsList");

// Fonction pour afficher toutes les commandes Git
function displayGitCommands(commands) {
    commandsList.innerHTML = "";
    commands.forEach(command => {
        const li = document.createElement("li");
        li.textContent = command;
        commandsList.appendChild(li);
    });
}

// Afficher toutes les commandes Git au chargement de la page
window.addEventListener("DOMContentLoaded", () => {
    displayGitCommands(gitCommands);
});

// Fonction de recherche
document.getElementById("searchInput").addEventListener("input", (event) => {
    const searchQuery = event.target.value.toLowerCase();
    const filteredCommands = gitCommands.filter(command => command.toLowerCase().includes(searchQuery));
    displayGitCommands(filteredCommands);
});
