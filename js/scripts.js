$(document).ready(function() {
  $("#button").click(function(){
    event.preventDefault();

      var sizeIn = parseInt($("input:radio[name=size]:checked").val());
      var pizzaSize = pizzaSize();

      //var amntPssblTppngs = getToppingTotalVal();
      //var numberOfToppings = getToppingTotalVal();
      //alert(amntPssblTppngs);

      getToppingTotalVal();
      getActualToppings()
      //orderSummary();
      //var finalSummary = orderSummary();
/****************** FUNCTIONS ******************/

      function Pizza(size, toppings, AmountOfToppings) {
        this.size= size;
        this.toppings = toppings;
        this.AmountOfToppings = AmountOfToppings;
      }

      function pizzaSize() {
        var sizeOfPizza = "";
        if(sizeIn === 1){
          sizeOfPizza = "small";
        }else if(sizeIn === 2){
          sizeOfPizza = "medium";
        }else if(sizeIn === 3){
          sizeOfPizza = "large";
        }else //alert("pick a size for you pizza");
        //pizzaSize();
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
        alert(actualToppings);
        return(actualToppings);
      }

     $(".summary").show();
  });
});
