'use strict'
let productList = [];

const crudOprtaions ={
    addProduct(){
        let product = {
            name:elements.productName.value,
            price:elements.productPrice.value,
            category:elements.productCategory.value,
            description:elements.productDescription.value,
            image:elements.productImage.files[0].name,  
        }
        productList.push(product);
        crudOprtaions.displayProducts(productList)
        console.log(productList)
        },
   displayProducts(pList)
   { 
    let productsContainer= "";
    for(let i=0 ; i< pList.length; i++){
         productsContainer +=`<div class="col-md-3">
                <img src="./assets/images/${pList[i].image}" class="w-100" alt="iphone12"/>
                <p>product name: ${pList[i].name}</p>
                <p>product price: ${pList[i].price}</p>
                <p>product categogry: ${pList[i].category}</p>
                <p>product description: ${pList[i].description}</p>
                <button class="btn btn-outline-success w-100">update</button>
                <button class="btn btn-outline-danger  my-3 w-100 ">delete</button>
            </div>`
    }
   elements.productsRow.innerHTML = productsContainer;   
   },
}