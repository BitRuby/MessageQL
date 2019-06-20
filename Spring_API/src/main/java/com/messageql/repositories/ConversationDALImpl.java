package com.messageql.repositories;

import com.messageql.dal.ConversationDAL;
import com.messageql.model.Conversation;
import com.messageql.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

@Repository
public class ConversationDALImpl implements ConversationDAL {

    private final MongoTemplate mongoTemplate;

    @Autowired
    public ConversationDALImpl(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @Override
    public Conversation getConversation(String id) {
        Query query = new Query();
        query.addCriteria(Criteria.where("_id").is(id));
        return mongoTemplate.findOne(query, Conversation.class);
    }

    @Override
    public Conversation joinConversation(String id) {
        String uId = "5d0beb18bdf86b58d11fd96d";
        Query query = new Query();
        query.addCriteria(Criteria.where("_id").is(uId));
        User user = mongoTemplate.findOne(query, User.class);
        Query query2 = new Query(Criteria.where("_id").is(id));
        Update update = new Update().push("users", user);
        return mongoTemplate.findAndModify(query2, update, Conversation.class);
    }

    @Override
    public Conversation leaveConversation(String id) {
        String uId = "5d0beb18bdf86b58d11fd96d";
        Query query = new Query();
        query.addCriteria(Criteria.where("_id").is(uId));
        User user = mongoTemplate.findOne(query, User.class);
        Query query2 = new Query(Criteria.where("_id").is("id"));
        Update update = new Update().pull("users", user);
        return mongoTemplate.findAndModify(query2, update, Conversation.class);
    }

    @Override
    public Conversation saveConversation() {
        String uId = "5d0beb18bdf86b58d11fd96d";
        Conversation conversation = new Conversation();
        Query query = new Query();
        query.addCriteria(Criteria.where("_id").is(uId));
        User user = mongoTemplate.findOne(query, User.class);
        conversation.setUser(user);
        conversation.setCreator(user);
        mongoTemplate.save(conversation);
        return conversation;
    }

}