package uk.co.benskin.graphql_spring_boot_tutorial.dal;

import com.mongodb.client.result.UpdateResult;
import uk.co.benskin.graphql_spring_boot_tutorial.model.User;

import java.util.Collection;
import java.util.List;

public interface UserDAL {
    User saveUser(String username, String password);

    User getUser(String id);

    List<User> getUsers(int limit);


    public void insert();



    public UpdateResult update();



    public List<User> delete();
}
