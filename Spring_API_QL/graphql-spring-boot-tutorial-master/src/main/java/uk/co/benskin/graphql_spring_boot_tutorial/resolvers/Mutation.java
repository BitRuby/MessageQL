package uk.co.benskin.graphql_spring_boot_tutorial.resolvers;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import org.springframework.stereotype.Component;
import uk.co.benskin.graphql_spring_boot_tutorial.model.Conversation;
import uk.co.benskin.graphql_spring_boot_tutorial.model.Message;
import uk.co.benskin.graphql_spring_boot_tutorial.model.User;
import uk.co.benskin.graphql_spring_boot_tutorial.repositories.ConversationDALImpl;
import uk.co.benskin.graphql_spring_boot_tutorial.repositories.MessageDALImpl;
import uk.co.benskin.graphql_spring_boot_tutorial.repositories.UserDALImpl;

import java.util.List;


@Component
public class Mutation implements GraphQLMutationResolver {
    private MessageDALImpl messageRepository;
    private ConversationDALImpl conversationRepostiory;
    private UserDALImpl userRepository;
    public Mutation( MessageDALImpl message,ConversationDALImpl conversation, UserDALImpl user) {
        this.messageRepository = message;
        this.conversationRepostiory = conversation;
        this.userRepository = user;
    }
    public Conversation newConversation() {
        return conversationRepostiory.newConversation();
    }
    public Message createMessage(String content, String convId) {
        return messageRepository.createMessage(content, convId);
    }
    public Conversation deleteConversation(String _id) {
        return conversationRepostiory.deleteConversation(_id);
    }

    public List<User> insert(){
        userRepository.insert();
        return userRepository.getUsers(100000);
    }

    public List<User> update(){
        userRepository.update();
        return userRepository.getUsers(100000);
    }

    public List<User> delete(){
    return userRepository.delete();
    }

}
