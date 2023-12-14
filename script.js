// Create Our Animation Main Function - animateText by id
  function animateText(id) {
    const textElement = document.getElementById(id);
    const text = textElement.innerText;

    // Clear the original text content
    textElement.innerHTML = ''; 

    for (let i = 0; i < text.length; i++) {
      const span = document.createElement('span');
      span.innerText = text[i];
      // Adjust the delay as needed - example - ${(i + 2) * 1}s
      span.style.animationDelay = `${(i + 0.01) * 0.01}s`;
      textElement.appendChild(span);

      // Add animationend event listener to the last created span
      if (i === text.length - 1) {
        span.addEventListener('animationend', () => {
          // Remove individual spans
          textElement.innerHTML = '';

          // Create a single span with the entire text 
          // When Animation End Remove all span apended with the textElement.appendChild(span);

          const fullTextSpan = document.createElement('span');
          // Adding New ID for the span after the span animations been removed after the end of the animation
          fullTextSpan.setAttribute("id", `endanim-${id}`);
          // Adding New CSS clas for the span after the span animations been removed after the end of the animation
          fullTextSpan.setAttribute("class", `endanim-${id}`);
          fullTextSpan.innerText = text;
          textElement.appendChild(fullTextSpan);
        });
      }
    }
  }

  // Call the function for each div id
  animateText('animTextOne');
  animateText('animTextTwo');
  animateText('animTextThree');
