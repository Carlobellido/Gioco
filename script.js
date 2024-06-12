// script.js
document.addEventListener('DOMContentLoaded', () => {
    const characters = document.querySelectorAll('.character');
    const confirmBtn = document.getElementById('confirm-btn');
    const selectedCharacterParagraph = document.getElementById('selected-character');
    let selectedCharacter = null;

    characters.forEach(character => {
        character.addEventListener('click', () => {
            // Remove 'selected' class from all characters
            characters.forEach(char => char.classList.remove('selected'));
            
            // Add 'selected' class to the clicked character
            character.classList.add('selected');
            
            // Store selected character
            selectedCharacter = character.getAttribute('data-name');
            
            // Update the paragraph to show the selected character
            selectedCharacterParagraph.textContent = `${selectedCharacter}`;
        });
    });

    confirmBtn.addEventListener('click', () => {
        if (selectedCharacter) {
            alert(`You have selected: ${selectedCharacter}`);
            window.location.href = 'PaginaIniziale.html';
        } else {
            alert('No character selected');
        }
    });

    
    
});
    
   

