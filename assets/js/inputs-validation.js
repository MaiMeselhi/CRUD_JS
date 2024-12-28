"use strict";

const inputsValidation = {
  productNameValidation() {
    //check if productName consist of 3-20 letters and from A-Z or a-z
    const regex = /^[A-Z][A-Za-z]{2,19}(\d{1,3})?$/;
        if (regex.test(elements.productName.value)) {
        elements.productName.classList.add("is-valid");
        elements.productName.classList.remove("is-invalid");

     elements.nameError.classList.replace("d-block","d-none");
     elements.emptyError.classList.replace("d-block","d-none");

      return true;
    } else {
        elements.productName.classList.add("is-invalid");
        elements.productName.classList.remove("is-valid");
        elements.nameError.classList.replace("d-none","d-block");

      return false;
    }
  },
  emptyProductNameValidation(){
    if(elements.productName.value === ""){
        elements.emptyError.classList.replace("d-none","d-block");
        elements.nameError.classList.replace("d-block","d-none");
        return false;
    }
    else {
        elements.emptyError.classList.replace("d-block","d-none");
        return true;

    }

  }
};
