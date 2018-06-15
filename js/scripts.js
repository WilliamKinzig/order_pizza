$(document).ready(function() {
  $("#button").click(function(){
    event.preventDefault();

      //var option1 = parseInt($("input:radio[name=size]:checked").val());
      //var option2 = parseInt($("input:radio[name=quesGroup02]:checked").val());
      //var option3 = parseInt($("input:radio[name=quesGroup03]:checked").val());

      var sizeIn = parseInt($("input:radio[name=size]:checked").val());
      var pizzaSize = pizzaSize();

      var amntPssblTppngs = 6;
      var numberOfToppings = getToppingTotalVal();

      var pizza01 = new Pizza ("pizzaSize", numberOfToppings);

      alert(pizza01.toppings);


      getToppingTotalVal();

      //orderSummary();
      //var finalSummary = orderSummary();
/****************** FUNCTIONS ******************/

      function Pizza(size, toppings, AmountOfToppings,) {
        this.size = size;
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
        //alert(totalToppings);
          var top1 = parseInt($("input:radio[name=toppings1]:checked").val());
          var top2 = parseInt($("input:radio[name=toppings2]:checked").val());
          var top3 = parseInt($("input:radio[name=toppings3]:checked").val());
          var top4 = parseInt($("input:radio[name=toppings4]:checked").val());
          var top5 = parseInt($("input:radio[name=toppings5]:checked").val());
          var top6 = parseInt($("input:radio[name=toppings6]:checked").val());
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
          //alert(totalToppings);
          return(totalToppings);
      }

      // alert(sizeIn);
      // alert(pizzaSize);

      // function orderSummary() {
      //
      //
      //
      //     var finalToppings = [];

      //     for (var i = 0; i < toppings.length; i++) {
      //       finalToppings.push('<span>' + array[i] + '</span>');
      //     }
      //
      //     $("summary").html(finalToppings.join(""));
      //
      //   });
      // }

     $(".summary").show();
  });
});
