package uk.co.benskin.graphql_spring_boot_tutorial.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;
import uk.co.benskin.graphql_spring_boot_tutorial.dal.UserDAL;
import uk.co.benskin.graphql_spring_boot_tutorial.model.User;

import java.util.List;

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
        mongoTemplate.save(u, "users");

        return u;
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