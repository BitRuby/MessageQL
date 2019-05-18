package com.example.demo.model;

import java.util.LinkedList;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "conversations")
@JsonIgnoreProperties(value = { "id" }, allowGetters = true)
public class Conversation {

    @Id
    private String id;

    private LinkedList<User> users = new LinkedList<User>();
    private User creator;

    public Conversation() {
        super();
    }

    public void setUser(User id) {
        this.users.add(id);
    }

    public LinkedList<User> getUser() {
        return this.users;
    }


    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public User getCreator() {
        return this.creator;
    }

    public void setCreator(User creator) {
        this.creator = creator;
    }

    @Override
    public String toString() {
        return String.format("Conversation[id=%s, userIdArray='%s', creator='%s'", id, users, creator);
    }

}