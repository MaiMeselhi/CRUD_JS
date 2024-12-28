'use strict'

const dom = {
    create(
        content = false,
        type = 'div',
        parent = false,
        className = false
    ) {
        const element = document.createElement(type);
        if (content) element.innerHTML = content;
        if (className) element.className = className;
        if (parent) parent.append(el);
        
        return element;
    },
    $(selector) {
        return document.querySelector(selector);
    },
    mapping() {

        elements.productsRow = dom.$('#productsRow');
        elements.productName =dom.$('#productName');
        elements.productPrice=dom.$('#productPrice');
        elements.productCategory =dom.$('#productGategory');
        elements.productDescription =dom.$('#productDesription');
        elements.productImage=dom.$('#productImage');
        elements.addProductBtn =dom.$('#addBtn');
        elements.updateProductBtn =dom.$('#updateBtn');
        elements.searchProducts= dom.$('#searchProducts');

    },
  
    appendEventListeners() {
    },
   
}