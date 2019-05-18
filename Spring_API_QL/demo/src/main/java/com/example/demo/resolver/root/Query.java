package com.example.demo.resolver.root;


import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.example.demo.model.Conversation;
import com.example.demo.model.Message;
import com.example.demo.model.User;
import com.example.demo.repositories.ConversationDALImpl;
import com.example.demo.repositories.MessageDALImpl;
import com.example.demo.repositories.UserDALImpl;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class Query implements GraphQLQueryResolver {

    private ConversationDALImpl conversationRepository;
    private MessageDALImpl messageRepository;
    private UserDALImpl userRepository;

    public Query(ConversationDALImpl conversation, MessageDALImpl message, UserDALImpl user) {
        this.conversationRepository = conversation;
        this.messageRepository = message;
        this.userRepository = user;
    }

    public Conversation getConversation(String id) {
        return conversationRepository.getConversation(id);
    }

    public Message getMessage(String id) {
        return messageRepository.getMessage(id);
    }

    public User getUser(String id) {
        return userRepository.getUser(id);
    }

}