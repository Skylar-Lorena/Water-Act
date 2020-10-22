var price , type_price, size_price ;
let total = 0;
function Getwater( name,size,type,location, total ){
  this.name = name;
  this.size = size;
  this.type = type;
  this.location = location;
  this.total = total;
}
$(document).ready(function(){
  $("button.proceed").click(function(event){
   let pname = $("#name option:selected").val();
   let psize = $("#size option:selected").val();
   let ptype = $("#type option:selected").val();
   let plocation = [];
   $.each($("input[name='location']:checked"), function(){            
       plocation.push($(this).val());
   });
   console.log(plocation.join(", "));

   switch(psize){
    case "0":
      price =0;
    break;
    case "10,000lts":
       price = 6000;
       console.log(price);
     break;
     case "3,000lts":
       price = 3000;
       console.log("The price is "+price);
     break;
     case "2,000lts":
       price = 2000;
       console.log("The price is "+price);
    case "1,00lts":
       price = 1500;
       console.log("The price is "+price);
     break;
     case "500lts":
       price = 1000;
       console.log("The price is "+price);
     break;
     case "300lts":
       price = 500;
       console.log("The price is "+price);
      break;
      case "210lts":
         price = 300;
         console.log("The price is "+price);
      break;
      case "100lts":
         price = 250;
         console.log("The price is "+price);
      break;
      case "50lts":
           price = 150;
           console.log("The price is "+price);
      break;
      case "20lts":
           price = 100;
           console.log("The price is "+price);
            break;
     case "10lts":
       price = 50;
       console.log("The price is "+price);
     break;
     case "5lts":
       price = 40;
       console.log("The price is "+price);
      break;
      case "2lts":
         price = 30;
         console.log("The price is "+price);
      break;
      case "1lts":
         price = 10;
         console.log("The price is "+price);
     
     default:
       console.log("error"); 
   }
   switch(ptype){
      case "0":
        type_price = 0;
      break;
      case "purified":
        type_price = 200;
      break;
      case "regular":
        type_price = 150;
      break;
      case "sparkling":
        type_price = 250;
      break;
      default:
        console.log("error"); 
    }
    let location_value = plocation.length*50;
    console.log("location value" + location_value);

    if((psize == "0") && (ptype == "0")){
      console.log("nothing selected");
      $("button.proceed").show();
      $("#info").show();
      $("div.choice").hide();
      alert("Please select Water size and type"); 
    }
    else{
      $("button.proceed").hide();
      $("#info").hide();
      $("div.choice").slideDown(1000);
    }

    total = price + type_price + location_value;
    console.log(total);
    let checkoutTotal =0;
    checkoutTotal = checkoutTotal + total;

    $("#watername").html($("#name option:selected").val());
    $("#watersize").html( $("#size option:selected").val());
    $("#watertype").html($("#type option:selected").val());
    $("#waterlocation").html(plocation.join(", "));
    $("#watertotal").html(total);
    

    $("button.addWater").click(function(){
      let pname = $("#name option:selected").val();
      let psize = $("#size option:selected").val();
      let ptype = $("#type option:selected").val();
      let plocation = [];
      $.each($("input[name='location']:checked"), function(){            
          plocation.push($(this).val());
      });
      console.log(plocation.join(", "));
      switch(psize){
          case "0":
            price =0;
          break;
          case "10,000lts":
             price = 6000;
             console.log(price);
           break;
           case "5,000lts":
             price = 3000;
             console.log("The price is "+price);
           break;
           case "3,000lts":
             price = 2000;
             console.log("The price is "+price);
          case "2,000lts":
             price = 1500;
             console.log("The price is "+price);
           break;
           case "1,000lts":
             price = 1000;
             console.log("The price is "+price);
           break;
           case "500lts":
             price = 500;
             console.log("The price is "+price);
            break;
            case "300lts":
               price = 300;
               console.log("The price is "+price);
            break;
            case "210lts":
               price = 250;
               console.log("The price is "+price);
            break;
            case "100lts":
                 price = 150;
                 console.log("The price is "+price);
            break;
            case "50lts":
                 price = 100;
                 console.log("The price is "+price);
                  break;
           case "20lts":
             price = 50;
             console.log("The price is "+price);
           break;
           case "10lts":
             price = 40;
             console.log("The price is "+price);
            break;
            case "5lts":
               price = 30;
               console.log("The price is "+price);
            break;
            case "2lts":
               price = 20;
               console.log("The price is "+price);
            break;
            case "1lts":
                 price = 10;
                 console.log("The price is "+price);
            
           default:
             console.log("error"); 
         }
         switch(ptype){
          case "0":
            type_price = 0;
            console.log("The price is "+price);
          break;
          case "purified":
            type_price = 200;
            console.log("The price is "+price);
          break;
          case "regular":
            type_price = 100;
            console.log("The price is "+price);
          break;
          case "sparkling":
            type_price = 250;
            console.log("The price is "+price);
          
          default:
            console.log("error"); 
        }
        let location_value = plocation.length*50;
        console.log("location value" + location_value);
        total = price + type_price + location_value;
        console.log(total);

        checkoutTotal = checkoutTotal + total;
        console.log(checkoutTotal);
      var newOrder = new Getwater(pname, psize, ptype, plocation, total);

      $("#ordersmade").append('<tr><td id="watername">'+ newOrder.name +'</td><td id="watersize">' + newOrder.size + '</td><td id="watertype">'+newOrder.type + '</td><td id="pizzatopping">'+newOrder.location+'</td><td id="totals">'+newOrder.total+'</td></tr>');
      console.log(newOrder);
    });
    
    $("button#checkout").click(function(){ 
      $("button#checkout").hide();
      $("button.addWater").hide();
      $("button.deliver").slideDown(1000);
      $("#addedprice").slideDown(1000);
      console.log("Your total bills is sh. "+ checkoutTotal);
      $("#watertotal").append("Your bill is sh. "+ checkoutTotal);
    });

    
    $("button.deliver").click(function(){
      $(".watertable").hide();
      $(".choice h2").hide();
      $(".pick-up").slideDown(1000);
      $("#addedprice").hide();
      $("button.deliver").hide();
      $("#watertotal").hide();
      let deliveryamount= checkoutTotal+150;
      console.log("You will pay sh. " + deliveryamount+" on pick-up");
      $("#totalbill").append("Your bill plus pick-up fee is: " + deliveryamount);
    });

    $("button#final-order").click(function(event){
      event.preventDefault();

      $("#watertotal").hide();
      $(".pick-up").hide();
      $("button#final-order").hide();
      let deliveryamount= checkoutTotal+ 150;
      console.log("Final Bill is: "+ deliveryamount);
      let person = $("input#name").val();
      let phone = $("input#phone").val();
      let location = $("input#location").val();

      if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){
  
        $("#finallmessage").append( person +  ",Hello! We have recieved your order and it will be delivered to you at "+ location + ". Prepare sh. " + deliveryamount);
        $("#totalbill").hide();
        $("#finallmessage").slideDown(1200);
      }
      else {
        alert("Please fill in the details for pick-up!");
        $(".pick-up").show();
        $("button#final-order").show();
      }
    });
   event.preventDefault();
  });
});