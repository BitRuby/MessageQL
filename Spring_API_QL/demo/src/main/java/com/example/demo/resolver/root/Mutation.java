package com.example.demo.resolver.root;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import com.example.demo.model.Conversation;
import com.example.demo.model.Message;
import com.example.demo.model.User;
import com.example.demo.repositories.ConversationDALImpl;
import com.example.demo.repositories.MessageDALImpl;
import com.example.demo.repositories.UserDALImpl;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class Mutation implements GraphQLMutationResolver {

    private ConversationDALImpl conversationRepository;
    private MessageDALImpl messageRepository;
    private UserDALImpl userRepository;

    public Mutation(ConversationDALImpl conversation, MessageDALImpl message, UserDALImpl user) {
        this.conversationRepository = conversation;
        this.messageRepository = message;
        this.userRepository = user;
    }

    public Conversation joinConversation(String id) {
        return conversationRepository.joinConversation(id);
    }

    public Conversation leaveConversation(String id) {
        return conversationRepository.leaveConversation(id);
    }

    public Conversation saveConversation() {
        return conversationRepository.saveConversation();
    }

    public Message createMessage(Message message) {
        return messageRepository.createMessage(message);
    }

    public User saveUser(String username, String password) {
        return userRepository.saveUser(username, password);
    }

}