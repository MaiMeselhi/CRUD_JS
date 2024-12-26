"use strict";
let productList ;
let globalIndex;

const crudOprtaions = {
  //check if localStorage empty or not if not empty -> get and display products in the page
   ProductListEmptyOrNot(){
      if(localStorage.getItem("productList"))
      {
       productList = JSON.parse(localStorage.getItem("productList"))
       crudOprtaions.displayProducts(productList);
      }
     else{
      productList = [];
     } 
   },
  //function to add products
  addProduct() {  
    let product = {
      name: elements.productName.value,
      price: elements.productPrice.value,
      category: elements.productCategory.value,
      description: elements.productDescription.value,
      image: elements.productImage.files[0].name,
    };
    productList.push(product);
    crudOprtaions.clearInputsFields();
    crudOprtaions.displayProducts(productList);
    crudOprtaions.saveToLocalStorage();
  },
  //function to display products
  displayProducts(pList) {
    let productsContainer = "";
    for (let i = 0; i < pList.length; i++) {
      productsContainer += `<div class="col-md-4 ">
                <img src="./assets/images/${pList[i].image}" class="w-75 h-25" alt="iphone12"/>
                <p>product name: ${pList[i].name}</p>
                <p>product price: ${pList[i].price}</p>
                <p>product categogry: ${pList[i].category}</p>
                <p>product description: ${pList[i].description}</p>
                <button onclick="crudOprtaions.setFormToUpdateProduct(${i})" class="btn btn-outline-success w-100 ">update</button>
                <button onClick="crudOprtaions.deleteProduct(${i})"     class="btn btn-outline-danger  my-3 w-100 ">delete</button>
            </div>`;
    }
    elements.productsRow.innerHTML = productsContainer;
  },
  //function to clear inputsfields
  clearInputsFields(){
    elements.productName.value          =null;
    elements.productPrice.value         =null;
    elements.productCategory.value      =null;
    elements.productDescription.value   =null;
    elements.productImage.value          =null;
  },
  //function to delete product
  deleteProduct(index){
    productList.splice(index,1)
    console.log(index);
    crudOprtaions.displayProducts(productList);
   crudOprtaions.saveToLocalStorage();
  },
  //function to save products to Localstorage
  saveToLocalStorage(){
    localStorage.setItem("productList",JSON.stringify(productList));
    crudOprtaions.displayProducts(productList);
  },
  //function to set form to update
 setFormToUpdateProduct(index){
  //fill inputs fields with  product data
 globalIndex =index;
 elements.productName.value         =productList[index].name;
 elements.productPrice.value        =productList[index].price;
 elements.productCategory.value     =productList[index].category;
 elements.productDescription.value  =productList[index].description;
 //to update product -> hide addProductBtn btn und display updateProductBtn instead of it
 elements.addProductBtn.classList.add("d-none");
 elements.updateProductBtn.classList.remove("d-none")
 },
 //function to update selected product
 updateProduct(){
  console.log(globalIndex);
  //take updated values from inputs fields and save it again in the productList at the same index
  productList[globalIndex].name              =elements.productName.value;
  productList[globalIndex].price             =elements.productPrice.value;
  productList[globalIndex].category          =elements.productCategory.value;
  productList[globalIndex].description       =elements.productDescription.value;
  this.displayProducts(productList);
  crudOprtaions.saveToLocalStorage();
  //after updates -> hide updateProductBtn and display addProductBtn 
  elements.addProductBtn.classList.remove("d-none");
  elements.updateProductBtn.classList.add("d-none");
  //clear inputs fields
  crudOprtaions.clearInputsFields();
 }
};
