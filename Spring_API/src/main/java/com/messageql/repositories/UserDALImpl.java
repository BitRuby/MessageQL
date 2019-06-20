package com.messageql.repositories;
import java.util.List;
import com.messageql.dal.UserDAL;
import com.messageql.model.User;

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
    public User saveUser(User user) {
        return mongoTemplate.save(user);
    }

    @Override
    public User getUser(String id) {
        Query query = new Query();
        query.addCriteria(Criteria.where("_id").is(id));
        return mongoTemplate.findOne(query, User.class);
    }

    @Override
    public List<User> getUsers(int limit) {
        return mongoTemplate.find(new Query().limit(limit), User.class);
    }

}