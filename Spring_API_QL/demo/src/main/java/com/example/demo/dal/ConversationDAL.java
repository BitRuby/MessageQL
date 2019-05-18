package com.example.demo.dal;

import com.example.demo.model.Conversation;

public interface ConversationDAL {
    Conversation getConversation(String id);

    Conversation joinConversation(String id);

    Conversation leaveConversation(String id);

    Conversation saveConversation();
}