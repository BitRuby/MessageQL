package uk.co.benskin.graphql_spring_boot_tutorial.dal;


import uk.co.benskin.graphql_spring_boot_tutorial.model.Conversation;

public interface ConversationDAL {
    Conversation newConversation();
}