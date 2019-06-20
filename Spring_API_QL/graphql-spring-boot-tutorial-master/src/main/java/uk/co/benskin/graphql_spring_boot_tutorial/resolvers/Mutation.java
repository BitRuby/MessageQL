package uk.co.benskin.graphql_spring_boot_tutorial.resolvers;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import org.springframework.stereotype.Component;
import uk.co.benskin.graphql_spring_boot_tutorial.model.Conversation;
import uk.co.benskin.graphql_spring_boot_tutorial.model.Message;
import uk.co.benskin.graphql_spring_boot_tutorial.repositories.ConversationDALImpl;
import uk.co.benskin.graphql_spring_boot_tutorial.repositories.MessageDALImpl;


@Component
public class Mutation implements GraphQLMutationResolver {
    private MessageDALImpl messageRepository;
    private ConversationDALImpl conversationRepostiory;
    public Mutation( MessageDALImpl message,ConversationDALImpl conversation) {
        this.messageRepository = message;
        this.conversationRepostiory = conversation;
    }
    public Conversation newConversation() {
        return conversationRepostiory.newConversation();
    }
    public Message createMessage(String content, String convId) {
        return messageRepository.createMessage(content, convId);
    }
}
