const results = document.getElementById('results-list');
var ingredients = {'vodka': 'vodka', 'gin':'gin','tequila':'tequila', 'rum':'rum'};

console.log('hello');


 function getDrinksByName(){

    var inp = document.getElementById('inp').value;
    var newinp = (inp.trim()).replace(/\s/g, '+');

    $.getJSON("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + newinp, function(data){
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
}; 
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
/* function getDrinksByIngredient(){

    var inp = document.getElementById('inp').value;
    var newinp = (inp.trim()).replace(/\s/g, '+');

    
    if (ingredients[inp]){
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


} */





const button = document.getElementById('btn');

button.addEventListener('click', function(){
    var inp = document.getElementById('inp').value;
    if (ingredients[inp]){
        getDrinksByIngredient();
    } else {
        getDrinksByName();
    }
    //getDrinksByIngredient();
    
    
    
    console.log(inp);
})


/*button.addEventListener('click', function getDrinksByName(){
    var inp = document.getElementById('inp').value;
    var newinp = (inp.trim()).replace(/\s/g, '+');
    
    $.getJSON("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + newinp, function(data){
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
    
    
    
    console.log(inp);
})*/

/*button.addEventListener('click', function getDrinksByIngredient(){
    var inp = document.getElementById('inp').value;
    var ingredients = {'vodka': 'vodka', 'gin':'gin','tequila':'tequila'};
    if (ingredients[inp]){
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
    
    
    console.log(inp);
})*/




function hi(){
    console.log('waddup')
}