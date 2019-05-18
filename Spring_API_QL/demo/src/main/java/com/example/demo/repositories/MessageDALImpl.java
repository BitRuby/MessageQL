package com.example.demo.repositories;

import java.util.List;

import com.example.demo.dal.MessageDAL;
import com.example.demo.model.Message;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

@Repository
public class MessageDALImpl implements MessageDAL {

    private final MongoTemplate mongoTemplate;

    @Autowired
    public MessageDALImpl(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @Override
    public Message getMessage(String id) {
        Query query = new Query();
        query.addCriteria(Criteria.where("_id").is(id));
        return mongoTemplate.findOne(query, Message.class);
    }

    @Override
    public Message createMessage(Message message) {
        mongoTemplate.save(message);
        return new Message();
    }

    @Override
    public List<Message> getMessages(String convId) {
        Query query = new Query();
        query.addCriteria(Criteria.where("convId").is(convId));
        return mongoTemplate.find(query, Message.class);
    }

}