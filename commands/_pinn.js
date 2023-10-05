var chat_id = options.result.chat.id  
var message_id= options.result.message_id  
  
Api.pinChatMessage({  
chat_id: chat_id,  
message_id: message_id  
})
