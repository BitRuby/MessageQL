package com.example.demo.dal;

import com.example.demo.model.Message;

import java.util.List;


public interface MessageDAL {
    Message getMessage(String id);

    Message createMessage(Message message);

    List<Message> getMessages(String convId);
}