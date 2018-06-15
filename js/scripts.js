$(document).ready(function() {
  $("#button").click(function(){
    event.preventDefault();

      //var option1 = parseInt($("input:radio[name=size]:checked").val());
      //var option2 = parseInt($("input:radio[name=quesGroup02]:checked").val());
      //var option3 = parseInt($("input:radio[name=quesGroup03]:checked").val());

      var sizeIn = parseInt($("input:radio[name=size]:checked").val());
      var pizzaSize = pizzaSize();
      //var pizzaSize = sizeIn;
      var pizza01 = new Pizza ("pizzaSize",[]);
      var toppings = [];

      function Pizza(size, toppings) {
        this.size= size;
        this.toppings = toppings;
      }

      function pizzaSize() {
        var sizeOfPizza = "";
        if(sizeIn === 1){
          sizeOfPizza = "small";
        }else if(sizeIn === 2){
          sizeOfPizza = "medium";
        }else if(sizeIn === 3){
          sizeOfPizza = "large";
        }else alert("pick a size for you pizza");
        //pizzaSize();
        return sizeOfPizza;
      }

      // alert(sizeIn);
      // alert(pizzaSize);


      //toppings.push(option1);


      // function orderSummary() {
      //
      //
      //     toppings = ['london', 'ontario', 'san francisco', 'new york'];
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
