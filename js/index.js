$(document).ready(function(){
  // agregar un item

  $(".agregar").on("click", function(e){
      e.preventDefault();
    var item = $("input").val();

    var divLista = $("<div>");
    divLista.attr("class",item);
    var buttonC = $("<button>").text("Check");
    var buttonD = $("<button>").text("Delete");

    buttonC.attr("id", "check");
    buttonD.attr("id", "delete");
    var p = $("<p>").text(item);
   
    divLista.append(p);
    divLista.append(buttonC);
    divLista.append(buttonD);
    


    var li = $("<li>");
   
    li.append(divLista);

    $(".Lista").append(li);


    $("#delete").on("click", function(e){
        e.preventDefault();
       
        $(this).parent("div").remove();
       
        
    })

})




 

});