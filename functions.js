 function getDrinksByIngredient(){

    var inp = document.getElementById('inp').value;
    var newinp = (inp.trim()).replace(/\s/g, '+');

    
    
    $.getJSON("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + inp, function(data){
        console.log(data.drinks);
        let html = "";
        data.drinks.forEach(item => {
            html += `
            <div class="result-list-item">
                <img class="result-img" src="${item.strDrinkThumb}">
                <p class="result-name">${item.strDrink}</p>
                <button class="result-btn">Ingredients</button>
            </div>
            `
        });

        

        
        results.innerHTML = html;
    })
    


} 