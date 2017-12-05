 function CalculateIVU() {
      var price = document.forms.txts.value;
      if (!/^\d{1,8}(\.\d{1,2})?( *\+ *\d{1,8}(\.\d{1,2})?)*$/.test(price)) {
        alert("Invalid input");
        return false;
      }
      var sum = eval(price); // at this point we know price can be eval()ed
      var tax = 0.08 * sum;
      var final = tax;
      document.getElementById('res').value = final.toFixed(2);  // round
    }
    
    