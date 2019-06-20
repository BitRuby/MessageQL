package com.messageql.dal;

import com.messageql.model.User;

import java.util.List;

public interface UserDAL {
    User saveUser(User user);

    User getUser(String id);

    List<User> getUsers(int limit);

}
