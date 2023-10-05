/*CMD
  command: pin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var chat_id = options.result.chat.id  
var message_id= options.result.message_id  
  
Api.pinChatMessage({  
chat_id: chat_id,  
message_id: message_id  
})
