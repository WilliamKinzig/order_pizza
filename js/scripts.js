$(document).ready(function() {
  $("#button").click(function(){
    event.preventDefault();

      //var option1 = parseInt($("input:radio[name=size]:checked").val());
      //var option2 = parseInt($("input:radio[name=quesGroup02]:checked").val());
      //var option3 = parseInt($("input:radio[name=quesGroup03]:checked").val());

      function Pizza(size, toppings) {
        this.size= size;
        this.toppings = toppings;
      }

      var sizeIn = parseInt($("input:radio[name=size]:checked").val());

      var pizza01 = new Pizza ("sizeIn",[]);



      //toppings.push(option1);


      // function orderSummary() {
      //   $('document').ready(function () {
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
