package com.example.demo.dal;

import com.example.demo.model.User;

public interface UserDAL {
    User saveUser(String username, String password);

    User getUser(String id);

}
