document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', function() {
        
        const searchTerm = searchInput.value.trim().toLowerCase();

        if (searchTerm === '') {
            
            showAllProducts();
        } else {
            
            filterProducts(searchTerm);
        }
        console.log("hola, no olvides borrar este console log")
        
    });

    function showAllProducts() {
        
    }

    function filterProducts(searchTerm) {
        const productElements = document.querySelectorAll('.modelo');
        productElements.forEach(element => {
          const modelo = element.querySelector('h4').textContent.toLowerCase();
          console.log(`Modelo: ${modelo}`); 
      
          if (modelo.includes(searchTerm)) {
            element.style.display = 'block'; 
          } else {
            element.style.display = 'none'; 
          }
        });
      }

    
});