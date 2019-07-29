function searchFunction() {
      // creating variables to use later.
      var input, filter, prods, p, i, txtValue;
      // grabbing to what is in the my input
      input = document.getElementById("MyInput");
      // saving the value of input in uppercase
      filter = input.value.toUpperCase();
      // getting all the prods and storing into the variable
      prods = document.getElementsByClassName("products");
      // looping through each product
      for (i = 0; i < prods.length; i++) {
          // getting product name
        p = prods[i].getElementsByClassName("prodName")[0];
        // saving prods name to text values
        txtValue = p.textContent || p.innerText;
        // check to to see if input is in the current name
        // if input is found in product name then do not hide the product otherwise hide it
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          prods[i].style.display = "";
        } else {
          prods[i].style.display = "none";
        }
      }
    }