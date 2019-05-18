package com.example.demo.repositories;

import com.example.demo.dal.UserDAL;
import com.example.demo.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

@Repository
public class UserDALImpl implements UserDAL {

    private final MongoTemplate mongoTemplate;

    @Autowired
    public UserDALImpl(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @Override
    public User saveUser(String username, String password) {
        User u = new User();
        u.setPassword(password);
        u.setUsername(username);
        mongoTemplate.save(u);
        return new User();
    }

    @Override
    public User getUser(String id) {
        Query query = new Query();
        query.addCriteria(Criteria.where("_id").is(id));
        return mongoTemplate.findOne(query, User.class);
    }

}