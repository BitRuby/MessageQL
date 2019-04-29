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
        String uId = "5cc586619daaae299c9b017f";
        Query query1 = new Query();
        query1.addCriteria(Criteria.where("_id").is(uId));
        User user = mongoTemplate.findOne(query1, User.class);
        Query query2 = new Query();
        Update update = new Update().push("user", user);
        query2.addCriteria(Criteria.where("_id").is(id));
        return mongoTemplate.findAndModify(query2, update, Conversation.class);
    }

    @Override
    public Conversation leaveConversation(String id) {
        String uId = "5cc586619daaae299c9b017f";
        Query query1 = new Query();
        query1.addCriteria(Criteria.where("_id").is(uId));
        User user = mongoTemplate.findOne(query1, User.class);
        Query query2 = new Query();
        Update update = new Update().pull("user", user);
        query2.addCriteria(Criteria.where("_id").is(id));
        return mongoTemplate.findAndModify(query2, update, Conversation.class);
    }

    @Override
    public Conversation saveConversation() {
        String uId = "5cc586619daaae299c9b017f";
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