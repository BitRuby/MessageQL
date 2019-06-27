package com.messageql.dal;

import com.messageql.model.Conversation;

public interface ConversationDAL {
    Conversation getConversation(String id);

    Conversation joinConversation(String id);

    Conversation leaveConversation(String id);

    Conversation deleteConversation(String id);

    Conversation saveConversation();
}