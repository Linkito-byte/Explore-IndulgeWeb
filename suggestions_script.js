            // Reference to the form and suggestions section
            const form = document.getElementById('suggestionForm');
            const suggestionsDiv = document.getElementById('suggestions');
    
            // Event listener for form submission
            form.addEventListener('submit', function(event) {
                event.preventDefault();
    
                // Get user input values
                const suggestionText = document.getElementById('suggestion').value;
                const name = document.getElementById('name').value;
                const isAnonymous = document.getElementById('anonymous').checked;
    
                // Determine the display name
                const displayName = isAnonymous ? "Anonymous" : (name || "Anonymous");
    
                // Create a new div element to display the suggestion
                const newSuggestion = document.createElement('div');
                newSuggestion.classList.add('suggestion');
                newSuggestion.innerHTML = `<strong>${displayName}:</strong> ${suggestionText}`;
    
                // Create a delete button
                const deleteBtn = document.createElement('button');
                deleteBtn.classList.add('delete-btn');
                deleteBtn.textContent = 'Delete';
    
                // Append delete button to the suggestion
                newSuggestion.appendChild(deleteBtn);
    
                // Append the new suggestion to the suggestions section
                suggestionsDiv.appendChild(newSuggestion);
    
                // Event listener to delete suggestion
                deleteBtn.addEventListener('click', function() {
                    suggestionsDiv.removeChild(newSuggestion);
                });
    
                // Clear the input fields after submission
                form.reset();
            });