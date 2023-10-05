var date = new Date(); 

var time = "Time: " + 
   + date.getHours() + ":"  
   + date.getMinutes() + ":" 
   + date.getSeconds();

Bot.sendMessage(time);
