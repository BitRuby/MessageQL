package com.messageql.dal;

import com.messageql.model.User;

public interface UserDAL {
    User saveUser(User user);

    User getUser(String id);

}
