// Predefined list of suggestions.
const suggestions = [
    'apple',
    'banana',
    'orange',
    'grape',
    'watermelon',
    'pineapple',
    'strawberry',
    'blueberry',
    'kiwi',
    'mango'
  ];
  
  // Get references to DOM elements.
  const input = document.getElementById('userInput');
  const suggestionsDiv = document.getElementById('suggestions');
  
  // Listen for input events.
  input.addEventListener('input', function() {
    const inputValue = input.value.trim().toLowerCase();
    suggestionsDiv.innerHTML = ''; // Clear previous suggestions
  
    if (inputValue) {
      // Filter suggestions that contain the input substring.
      const filteredSuggestions = suggestions.filter(item =>
        item.toLowerCase().includes(inputValue)
      );
  
      // Create a suggestion div for each matching suggestion.
      filteredSuggestions.forEach(suggestion => {
        const suggestionElement = document.createElement('div');
        suggestionElement.textContent = suggestion;
        suggestionElement.classList.add('suggestion');
  
        // When a suggestion is clicked, fill the input with that value.
        suggestionElement.addEventListener('click', () => {
          input.value = suggestion;
          suggestionsDiv.innerHTML = '';
        });
  
        suggestionsDiv.appendChild(suggestionElement);
      });
    }
  });
  