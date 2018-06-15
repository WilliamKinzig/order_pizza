$(document).ready(function() {
  $("#button").click(function(){
    event.preventDefault();

      var sizeIn = parseInt($("input:radio[name=size]:checked").val());

      var totalToppings = getToppingTotalVal();
      var actualToppings = getActualToppings();
      var pizzaSize = getPizzaSize(sizeIn);
      priceCalculator(sizeIn, totalToppings);
      var toppingsToString = getActualToppings.toString();

      var array = [123,321];
      var bob = actualToppings.join(", ");
      //var arrayToSring = array.toString();


      var pizza01 = new Pizza(pizzaSize, actualToppings, totalToppings);


      //alert(actualToppings);

      //orderSummary();
      // alert(pizza01.size);
      // alert(pizza01.toppings);
      // alert(pizza01.amountOfToppings);
      //var finalSummary = orderSummary();




/****************** FUNCTIONS ******************/

      function priceCalculator(size, numOfToppings){

        var sizePrice = 5;
        var totalCost;

        var toppingsPrice = 1;
        for(var i = 0; i < numOfToppings; i++){
          toppingsPrice += .75;
        }

        var baseToppingCost = parseFloat("1.00");
        if(size === 2){
          sizePrice += 2;
        }else if(size === 3){
          sizePrice += 4;
        }else{
          sizePrice = sizePrice;
        }

        totalCost = sizePrice + toppingsPrice;
        return(totalCost);
      }



      function Pizza(size, toppings, amountOfToppings) {
        this.size= size;
        this.toppings = toppings;
        this.amountOfToppings = amountOfToppings;
      }

      function getPizzaSize(size) {

        var sizeOfPizza = "";
        if(size === 1){
          sizeOfPizza = "small";
        }else if(size === 2){
          sizeOfPizza = "medium";
        }else if(size === 3){
          sizeOfPizza = "large";
        }else alert("pick a size for you pizza");
        //alert(sizeOfPizza);
        return sizeOfPizza;
      }

      function getToppingTotalVal(){
        var totalToppings = 0;
        var toppings = [];

        var top1 = $("input:radio[name=Cheese]:checked").val();
        var top2 = $("input:radio[name=Pepperoni]:checked").val();
        var top3 = $("input:radio[name=Italian_Sausage]:checked").val();
        var top4 = $("input:radio[name=Jalupeno_Peppers]:checked").val();
        var top5 = $("input:radio[name=Pineapple]:checked").val();
        var top6 = $("input:radio[name=Mushrooms]:checked").val();
          if (top1){
            toppings.push("1");
          }
          if (top2){
            toppings.push("1");
          }
          if (top3){
            toppings.push("1");
          }
          if (top4){
            toppings.push("1");
          }
          if (top5){
            toppings.push("1");
          }
          if (top6){
            toppings.push("1");
          }

          for (i=0; i<toppings.length; i++){
            totalToppings += 1;
          }

          return(totalToppings);
      }

      function getActualToppings(){
        var actualToppings = [];
        var top1 = $("input:radio[name=Cheese]:checked").val();
        var top2 = $("input:radio[name=Pepperoni]:checked").val();
        var top3 = $("input:radio[name=Italian_Sausage]:checked").val();
        var top4 = $("input:radio[name=Jalupeno_Peppers]:checked").val();
        var top5 = $("input:radio[name=Pineapple]:checked").val();
        var top6 = $("input:radio[name=Mushrooms]:checked").val();

        if (top1){
          actualToppings.push("Cheese");
        }
        if (top2){
          actualToppings.push("Pepperoni")
        }
        if (top3){
          actualToppings.push("Italian_Sausage");
        }
        if (top4){
          actualToppings.push("Jalupeno_Peppers")
        }
        if (top5){
          actualToppings.push("Pineapple");
        }
        if (top6){
          actualToppings.push("Mushrooms")
        }
        return(actualToppings);
      }

    document.getElementById("insertb").innerHTML = bob;
    document.getElementById("insert").innerHTML = priceCalculator(sizeIn, totalToppings);
    $(".summary").show();
    $(".summary2").show();
  });
});
