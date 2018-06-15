$(document).ready(function() {
  $("#button").click(function(){
    event.preventDefault();

      var sizeIn = parseInt($("input:radio[name=size]:checked").val());


      //var amntPssblTppngs = getToppingTotalVal();
      //var numberOfToppings = getToppingTotalVal();
      //alert(amntPssblTppngs);

      var totalToppings = getToppingTotalVal();
      var actualToppings = getActualToppings();
      var pizzaSize = getPizzaSize(sizeIn);



      //orderSummary();

      var pizza01 = new Pizza(pizzaSize, actualToppings, totalToppings);
      alert(pizza01.size);
      alert(pizza01.toppings);
      alert(pizza01.amountOfToppings);

      //var finalSummary = orderSummary();

/****************** FUNCTIONS ******************/

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
          //alert(toppings);
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
        //alert(actualToppings);
        return(actualToppings);
      }





     $(".summary").show();
  });
});
