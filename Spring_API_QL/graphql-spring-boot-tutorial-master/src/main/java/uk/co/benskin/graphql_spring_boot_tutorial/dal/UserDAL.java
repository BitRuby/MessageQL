package uk.co.benskin.graphql_spring_boot_tutorial.dal;

import uk.co.benskin.graphql_spring_boot_tutorial.model.User;

import java.util.List;

public interface UserDAL {
    User saveUser(String username, String password);

    User getUser(String id);

    List<User> getUsers(int limit);
}
