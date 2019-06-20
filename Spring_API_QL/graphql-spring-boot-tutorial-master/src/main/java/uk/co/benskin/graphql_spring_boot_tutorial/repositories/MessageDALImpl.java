package uk.co.benskin.graphql_spring_boot_tutorial.repositories;

import java.util.Date;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;
import uk.co.benskin.graphql_spring_boot_tutorial.dal.MessageDAL;
import uk.co.benskin.graphql_spring_boot_tutorial.model.Message;

@Repository
public class MessageDALImpl implements MessageDAL {

    private final MongoTemplate mongoTemplate;

    @Autowired
    public MessageDALImpl(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @Override
    public Message createMessage(String content, String convId) {
        Message msg = new Message();
        msg.setContent(content);
        msg.setConvId(convId);
        msg.setDate(new Date());
        mongoTemplate.save(msg);
        return msg;
    }

    @Override
    public List<Message> getMessages(String convId) {
        Query query = new Query();
        query.addCriteria(Criteria.where("convId").is(convId));
        return mongoTemplate.find(query, Message.class);
    }

}