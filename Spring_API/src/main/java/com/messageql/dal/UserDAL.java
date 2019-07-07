package com.messageql.dal;

import com.messageql.model.User;
import com.mongodb.client.result.UpdateResult;

import java.util.Collection;
import java.util.List;

public interface UserDAL {
    User saveUser(User user);

    User getUser(String id);

    List<User> getUsers(int limit);

    List<User> insert();
    List<User> update();
    List<User> delete();

}
