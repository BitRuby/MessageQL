package uk.co.benskin.graphql_spring_boot_tutorial.repositories;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;
import uk.co.benskin.graphql_spring_boot_tutorial.dal.ConversationDAL;
import uk.co.benskin.graphql_spring_boot_tutorial.model.Conversation;
import uk.co.benskin.graphql_spring_boot_tutorial.model.Message;
import uk.co.benskin.graphql_spring_boot_tutorial.model.User;

@Repository
public class ConversationDALImpl implements ConversationDAL {

    private final MongoTemplate mongoTemplate;

    @Autowired
    public ConversationDALImpl(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @Override
    public Conversation newConversation() {
        String uId = "5d0beb20bdf86b58d1216077";
        Conversation conversation = new Conversation();
        Query query = new Query();
        query.addCriteria(Criteria.where("_id").is(uId));
        User user = mongoTemplate.findOne(query, User.class);
        conversation.setUser(user);
        conversation.setCreator(user);
        mongoTemplate.save(conversation);
        return conversation;
    }

    @Override
    public Conversation deleteConversation(String _id) {
        Query query = new Query();
        query.addCriteria(Criteria.where("_id").is(_id));
        mongoTemplate.remove(query, Conversation.class);
        Query query2 = new Query();
        query2.addCriteria(Criteria.where("convId").is(_id));
        mongoTemplate.findAllAndRemove(query2, Message.class);
        return new Conversation();
    }
}