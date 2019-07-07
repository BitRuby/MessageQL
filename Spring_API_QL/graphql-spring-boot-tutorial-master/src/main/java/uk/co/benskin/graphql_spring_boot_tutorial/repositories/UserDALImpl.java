package uk.co.benskin.graphql_spring_boot_tutorial.repositories;

import com.mongodb.client.result.UpdateResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;
import uk.co.benskin.graphql_spring_boot_tutorial.dal.UserDAL;
import uk.co.benskin.graphql_spring_boot_tutorial.model.User;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
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

    @Override
    public void insert() {
         mongoTemplate.insertAll(loadCsv());
    }

    @Override
    public UpdateResult update() {
        Update update = new Update().set("username", "userr");
        Query query = new Query();
        query.addCriteria(Criteria.where("username").exists(true));
        return mongoTemplate.updateMulti(query, update, User.class);
    }

    @Override
    public List<User> delete() {
        Query query = new Query();
        query.addCriteria(Criteria.where("username").exists(true));
        return mongoTemplate.findAllAndRemove(query, User.class);
    }

    Collection<User> loadCsv(){
        String csvFile = "db.csv";
        BufferedReader br = null;
        String line = "";
        String cvsSplitBy = ",";
        ArrayList<User> wordList = new ArrayList();
        try {

            br = new BufferedReader(new FileReader(csvFile));
            br.readLine();
            while ((line = br.readLine()) != null) {
                String[] country = line.split(cvsSplitBy);
                User u = new User();
                u.setPassword(country[1]);
                u.setUsername(country[0]);
                wordList.add(u);
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (br != null) {
                try {
                    br.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            Collection<User> c = wordList;
            return c;
        }
    }

}