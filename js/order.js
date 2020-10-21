$(document).ready(function(){
    $("#pickup-btn").click(function(){
      $("#pickup-btn").slideUp('1000').hide('1500');
      $("#pickup-btn").show('1000');
    });
    $("#delivery-btn").click(function(){
      $("#delivery-btn").slideUp('1500');
      $("#delivery-btn").slideDown('1000');
     
    });
  });
  

// Business Logic
var totalPriceArray = []; //Only global variable in code
function Order (litres, type) {
  this.customSize = 0;
  this.type = type;
  this.packaging = packaging;
  this.orderPrice = 0;
  this.sidePrice = 150;
}
Order.prototype.orderCost = function () {
  if (this.litres === "litres") {
    this.orderPrice += 0;
  } else if (this.litres === "light ") {
    this.orderPrice += 50;
  } else if (this.litres === "ligh ") {
    this.orderPrice += 100;
  } else if (this.litres === "lig ") {
    this.orderPrice += 150;
  } else if (this.litres === "li ") {
    this.orderPrice += 200;
  } else if (this.litres === "l ") {
    this.orderPrice += 250;
  } else if (this.litres === "extra ") {
    this.orderPrice += 300;
  } else if (this.litres === "extr ") {
    this.orderPrice += 350;
  } else if (this.litres === "ext ") {
    this.orderPrice += 400;
  } else if (this.litres === "ex ") {
    this.orderPrice += 450;
  } else if (this.litres === "e ") {
    this.orderPrice += 500;
  } else if (this.litres === "small ") {
    this.orderPrice += 550;
  } else if (this.litres === "medium ") {
    this.orderPrice += 650;
  } else if (this.litres === "big ") {
    this.orderPrice += 750;
  } else if (this.litres === "bigger ") {
    this.orderPrice += 850;
  } else if (this.litres === "biggest ") {
    this.orderPrice += 1000;
  }
  if (this.customSize === "Tankers in.") {
    this.orderPrice += 0;
  } else if (this.customSize === "Pet  Bottles  in.") {
    this.order += 0;
  } else if (this.customSize === "Cylinders in.") {
    this.order += 0;
  }
  
  if (this.type === "purified") {
    this.orderPrice += 0;
  } else if (this.type === "regular ") {
    this.orderPrice += 0;
  }
  
  this.orderPrice += this.size;
  this.orderPrice += this.type;
  this.orderPrice += this.litres;
  return this.orderPrice;
}
Order.prototype.sideCost = function () {
  return this.sidePrice;
}
Order.prototype.finalCost = function () {
  var cartTotalPrice = 0;
  for (var arrayElement = 0; arrayElement < totalPriceArray.length; arrayElement ++) {
    cartTotalPrice += totalPriceArray[arrayElement]; //////////////////////IMPORTANT!!! How to add contents of an array together
  }
  return cartTotalPrice;
}
function Address (streetAddress, houseNumber, estate) {
  this.streetAddress = streetAddress;
  this.estate = estate;
  this.houseNumber = houseNumber;
  
  this.deliveryAddress = (streetAddress +  "  " +  estate +  " " + houseNumber);
}

//User Interface Logic
$(document).ready(function(event) {
    /////Landing Page Btns
      $("#pickup-btn").click(function() {
        $("#order-content").show();
        $("#landing-content").hide();
        $("#delivery-option").text("PICKUP BY CUSTOMER");
      });
      $("#delivery-btn").click(function() {
        $("#address").show();
        $("#pickup-btn,#delivery-btn,#landing-tagline").hide();
      });
      $("form#address-form").submit(function(event) {
        event.preventDefault();
        var streetAddress = $("input#street-add").val();
        var houseNumber = $("input#house-add").val();
        var estate = $("select#estate-select").val();
        var newAddress = new Address(streetAddress, estate, houseNumber)
        $("#order-content").show();
        $("#landing-content").hide();
        $("#delivery-option").text("DELIVER TO: " + newAddress.deliveryAddress);
      });
      $("form#custom-order").submit(function(event) {
        event.preventDefault();
        var customSize = $("select#size").val();
        var type = $("select#type").val();
        var pet = $("select#litre").val();
        var orderDetails = (customSize + " - " + type + ", " + litres );
        var newOrder= new Order(customSize, litres);
        newCustomOrder.orderCost();
        totalPriceArray.push(newCustomOrder.orderPrice);
        $("#order-details-dropdown").show();
        $("#final-cost").text(newCustomOrder.finalCost());
        $("#order-details").append("<ul><li>" + orderDetails + "</li></ul>");
        $("#size, #type, #litres").val("");
      });
      $("#order-details-dropdown").click(function() {
        $("#order-details").toggle();
      });

    /////Side Orders
      var newSideOrder = new Order();
      $("#kianda").click(function() {
        newSideOrder.sideCost();
        totalPriceArray.push(newSideOrder.sidePrice);
        $("#final-cost").text(newSideOrder.finalCost());
        $("#sides-dropdown").show();
        $("#sides-details").append("<ul><li>" + "Kianda  " + "</li></ul>");
      });
      $("#mashimoni").click(function() {
        newSideOrder.sideCost();
        totalPriceArray.push(newSideOrder.sidePrice);
        $("#final-cost").text(newSideOrder.finalCost());
        $("#sides-dropdown").show();
        $("#sides-details").append("<ul><li>" + "Mashimoni" + "</li></ul>");
      });
      $("#kisumu").click(function() {
        newSideOrder.sideCost();
        totalPriceArray.push(newSideOrder.sidePrice);
        $("#final-cost").text(newSideOrder.finalCost());
        $("#sides-dropdown").show();
        $("#sides-details").append("<ul><li>" + "Kisumu" + "</li></ul>");
      });
      $("#soweto").click(function() {
        newSideOrder.sideCost();
        totalPriceArray.push(newSideOrder.sidePrice);
        $("#final-cost").text(newSideOrder.finalCost());
        $("#sides-dropdown").show();
        $("#sides-details").append("<ul><li>" + "Soweto East" + "</li></ul>");
      });
      $("#laini").click(function() {
        newSideOrder.sideCost();
        totalPriceArray.push(newSideOrder.sidePrice);
        $("#final-cost").text(newSideOrder.finalCost());
        $("#sides-dropdown").show();
        $("#sides-details").append("<ul><li>" + "Laini Saba" + "</li></ul>");
      });
      $("#sides-dropdown").click(function() {
        $("#sides-details").toggle();
      });

    

      ///Checkout Btn
    
      $("#checkout-btn").click(function() {
        location.reload();
        var pizza = document.getElementById("order-details").innerHTML.value;
        alert('Dear customer, ' + ' We have received your order successfully!');
        Bryson.preventDefault();

      });
      
    });

      
    
    