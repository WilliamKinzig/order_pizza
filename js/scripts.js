$(document).ready(function() {
  $("#button").click(function(){
    event.preventDefault();

      var option1 = parseInt($("input:radio[name=quesGroup01]:checked").val());
      var option2 = parseInt($("input:radio[name=quesGroup02]:checked").val());
      var option3 = parseInt($("input:radio[name=quesGroup03]:checked").val());

      function Pizza(size, toppings) {
        this.size= size;
        this.toppings = toppings;
      }




     $(".summary").show();
  });
});
