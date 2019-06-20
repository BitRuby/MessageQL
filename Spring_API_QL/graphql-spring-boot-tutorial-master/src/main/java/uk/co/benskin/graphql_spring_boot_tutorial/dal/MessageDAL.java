package uk.co.benskin.graphql_spring_boot_tutorial.dal;


import uk.co.benskin.graphql_spring_boot_tutorial.model.Message;

import java.util.List;


public interface MessageDAL {
    Message createMessage(String content, String convId);

    List<Message> getMessages(String convId);
}