package com.messageql.dal;

import java.util.List;

import com.messageql.model.Message;

public interface MessageDAL {
    Message getMessage(String id);

    Message createMessage(Message message);

    List<Message> getMessages(String convId);
}