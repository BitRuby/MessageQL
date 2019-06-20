package uk.co.benskin.graphql_spring_boot_tutorial.resolvers;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import org.springframework.stereotype.Component;
import uk.co.benskin.graphql_spring_boot_tutorial.model.Message;
import uk.co.benskin.graphql_spring_boot_tutorial.model.User;
import uk.co.benskin.graphql_spring_boot_tutorial.repositories.MessageDALImpl;
import uk.co.benskin.graphql_spring_boot_tutorial.repositories.UserDALImpl;
import java.util.List;

@Component
public class Query implements GraphQLQueryResolver {

    private UserDALImpl userRepository;
    private MessageDALImpl messageRepository;

    public Query(UserDALImpl user, MessageDALImpl message) {
        this.userRepository = user;
        this.messageRepository = message;

    }

    public List<User> users(int limit) {
        return userRepository.getUsers(limit);
    }
    public List<Message> messages(String _id) { return messageRepository.getMessages(_id); }

}