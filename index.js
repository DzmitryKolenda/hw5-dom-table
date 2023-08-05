fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then((data) => {
    console.log(data.products);
    // Start here :)
    const products = data.products;

    let parent = document.querySelector('#parent');

    for (let item in products) {
      let div = document.createElement('div');

      div.innerHTML = 
      '<div class="card">' + 

        '<div class="card-img">' + 
          '<img src="' + products[item].thumbnail + '" class="card-img-top" alt="...">' + 
        '</div>' + 
      
        '<div class="card-body">' + 
          '<h5 class="card-title">' + products[item].title + '</h5>' + 

          '<p class="card-text">' + products[item].description + '</p>' + 

          '<div class="bg-border-top">' + 
            '<div class="price">Price: ' + products[item].price + '$</div>' + 

            '<div class="rating">Rating: ' + products[item].rating + '</div>' +
          '</div>' + 

          '<a href="#" class="btn btn-primary">Add to cart</a>' + 
        '</div>' + 
      '</div>'

      parent.appendChild(div);
    }
  });
