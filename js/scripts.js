document.addEventListener("DOMContentLoaded", function(event) {


// Imgaes
var good         = document.getElementById('green')
   ,notGood      = document.getElementById('red')
   ,loader       = document.getElementById('loader')
   ,load         = document.getElementById('loader-inner');


// Buttons
var start = document.getElementById("start")
   ,refresh = document.getElementById("save");

// DATA local
var loc_ipRecipient   = document.getElementById("Loc_ipRecipient")
   ,loc_portRecipient = document.getElementById("Loc_portRecipient")
   ,loc_ipSender      = document.getElementById("Loc_ipSender")
   ,loc_portSender    = document.getElementById("Loc_portSender")
   ,loc_protocol      = document.getElementById("Loc_protocol")
   ,loc_flag          = document.getElementById("Loc_flag")
   ,loc_Access        = document.getElementById("Loc_access");

// DATA Net

var    serv_ipSender      = document.getElementById("serv_ipSender")
      ,serv_portSender    = document.getElementById("serv_portSender")
      ,serv_ipRecipient   = document.getElementById("serv_ipRecipient")
      ,serv_portRecipient = document.getElementById("serv_portRecipient")
      ,serv_protocol      = document.getElementById("serv_protocol")
      ,serv_flag          = document.getElementById("serv_flag")
      ,serv_Access        = document.getElementById("serv_access");



// Get options Value

var  getAccess1   = loc_Access.options[loc_Access.selectedIndex].value
    ,getAccess2   = serv_Access.options[serv_Access.selectedIndex].value;


// DATA input

var list_Data = {
      recipient: {
          ip: [210,10,1,0] + "/" + "24",
          port:  1024,
      },
      sender: {
        ip: [210,10,1,0] + "/" + "24",
        port: 80,
      },
      protocol: "TCP",
      lflag: "Ack",
      getAccess1: 1
};

var rule_Table = {
      recipient: {
        ip:  list_Data.recipient.ip,
        port: 80
      },
      sender: {
        ip: [210,10,1,0] + "/" + "24",
        port:   1024
      },
      protocol: "TCP",
      sflag: "Ack",
      getAccess2: 1
};


// local
  loc_ipRecipient.textContent   = list_Data.recipient.ip;
  loc_portRecipient.textContent = "> " + list_Data.recipient.port;
  loc_ipSender.textContent      = "!"  + list_Data.sender.ip;
  loc_portSender.textContent    = list_Data.sender.port;
  loc_flag.textContent          = list_Data.lflag;
  loc_protocol.textContent      = list_Data.protocol;

// internet
  serv_ipSender.textContent       = "!" + rule_Table.recipient.ip;
  serv_portSender.textContent     = rule_Table.recipient.port;
  serv_ipRecipient.textContent    = rule_Table.sender.ip;
  serv_portRecipient.textContent  = "> " +rule_Table.sender.port;
  serv_flag.textContent           = rule_Table.sflag;
  serv_protocol.textContent       = rule_Table.protocol;


var    locr_ip2       = list_Data.recipient.ip       ,ser_ip2        = rule_Table.recipient.ip
var    locr_port2     = list_Data.recipient.port     ,ser_port2      = rule_Table.recipient.port
var    locs_ip2       = list_Data.sender.ip          ,sers_ip2       = rule_Table.sender.ip
var    locs_port2     = list_Data.sender.port        ,sers_port2     = rule_Table.sender.port
var    loc_flag2      = list_Data.lflag              ,ser_flag2      = rule_Table.sflag
var    loc_protocol2  = list_Data.protocol           ,ser_protocol2  = rule_Table.protocol;

// Фунция
function pc1(){
  good.style.display  = 'block';
  var mas = [535, 630, 725, 845, 940, 1035]
  var rand = Math.floor(Math.random() * mas.length);
  var p = 1 + Math.floor(Math.random() * 2)

   b = mas[rand];
   good.style.top = b + 'px';

  var stopOne = setInterval(frame, 10)
     ,stopTwo = setInterval(count, 10);

function frame() {

      list_Data.getAccess1 = p;
      list_Data.getAccess2 = p;

      if (a == 350) {
          if (b ==  790) {
             if (c == 450) {
                clearInterval(stopOne);
                clearInterval(stopTwo);
              }else {
                c++;
                good.style.left = c + 'px';
              }
            }else {
              b++;
              good.style.top = b + 'px';
            }
      }else {
              a++;
              good.style.left = a + 'px';
      }
};

function count() {
  list_Data.getAccess1 = p;
  list_Data.getAccess2 = p;
    if (x == 350) {
        if (y == 790) {
           if (z == 450) {
              clearInterval(stopOne);
              clearInterval(stopTwo);
            }else {
              z++;
              good.style.left = z + 'px';
            }
          }else {
            y--;
            good.style.top = y + 'px';
          }
    }else {
            x++;
            good.style.left = x + 'px';
    }
 }




 switch(b) {
   case 535:
   var  a = 285
       ,b = 535
       ,c = 350;
       frame();

   break;

   case 630:
     var  a = 285
         ,b = 630
         ,c = 360;
       frame();
   break;

   case 725:
     var  a = 285
         ,b = 725
         ,c = 350;
       frame();
   break;

   case 845:
     var  x = 285
         ,y = 845
         ,z = 350;
       count();
   break;

   case 940:
     var  x = 285
         ,y = 940
         ,z = 350;
       count();
   break;

   case 1035:
     var  x = 285
         ,y = 1035
         ,z = 350;
       count();
   break;
   default:
     var  a = 285
         ,b = 535
         ,c = 350;
         frame();
   break;

 }


};


function myMove() {
    var pa = 795;
    var pb = 850;
    var id = setInterval(frame, 10);
    function frame() {
        if (pa == 850) {
          if (pb == 790) {
              clearInterval(id);
          } else {
              pb--;
              good.style.left = pb + 'px';
            }
        } else {
            pa++;
            good.style.left = pa + 'px';
    }

    }

};



start.onclick = function() {
  pc1();

  if ( locr_ip2   == ser_ip2   && locr_port2 == sers_port2 && locs_ip2      ==   sers_ip2 && list_Data.getAccess1 == 1 &&
       locs_port2 == ser_port2 && loc_flag2  == ser_flag2  && loc_protocol2 ==   ser_protocol2
     )
     {
       var func1 = function() {
          good.style.display  = 'none';
       }
       good.style.display  = 'block';
       loader.style.display  = 'block';

      var func2 = function() {
          good.style.display  = 'block';
          good.style.left  = '800px';
          myMove();
        }

            setTimeout(func1, 6000);
            setTimeout(func2, 6000);

            if ( locr_ip2   == ser_ip2   && locr_port2 == sers_port2 && locs_ip2      ==   sers_ip2  &&
                 locs_port2 == ser_port2 && loc_flag2  == ser_flag2  && loc_protocol2 ==   ser_protocol2 &&  rule_Table.getAccess2 == 1
               )
               {

              var func3 = function() {
                   good.style.display  = 'block';
                   good.style.left  = '450px';
                  }

            var func4 = function() {
              loader.style.animation = 'none'
              load.style.animation = 'none'
              alert("Выполнено !!!");
            }

          setTimeout(func3, 12000);
          setTimeout(func4, 14000);

          clearTimeout(func1);
          clearTimeout(func2);
          clearTimeout(func3);
          clearTimeout(func4);
        }else {
          good.style.display  = 'block';
          loader.style.display  = 'block';

          var func5 = function() {
            loader.style.animation = 'none'
            load.style.animation = 'none'
            good.style.display  = 'none';
            notGood.style.display  = 'block';
            notGood.style.left  = '800px';
            loader.style.backgroundColor  = 'red';
            alert("Ошибка !");
         }
         setTimeout(func3, 8000);
         setTimeout(func4, 10000);
         setTimeout(func5, 10000);


         clearTimeout(func3);
         clearTimeout(func4);
         clearTimeout(func5);
        }

        clearTimeout(func1);
        clearTimeout(func2);
        clearTimeout(func3);
        clearTimeout(func4);
        clearTimeout(func5);

      }else {

         good.style.display  = 'block';
         loader.style.display  = 'block';

         var func5 = function() {
           loader.style.animation = 'none'
           load.style.animation = 'none'
           good.style.display  = 'none';
           notGood.style.display  = 'block';
           loader.style.backgroundColor  = 'red';
           loader.style.backgroundColor  = 'red';
           alert("Ошибка !");
        }

        setTimeout(func5, 5000);
        clearTimeout(func5);
       }

     }
});
