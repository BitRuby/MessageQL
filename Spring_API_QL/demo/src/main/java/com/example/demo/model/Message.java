package com.example.demo.model;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "messages")
@JsonIgnoreProperties(value = { "id" }, allowGetters = true)
public class Message {

    @Id
    private String id;

    private Date date = new Date();
    private String content;
    private String convId;

    public Message() {
        super();
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getConvId() {
        return this.convId;
    }

    public void setConvId(String convId) {
        this.convId = convId;
    }

    public String getContent() {
        return this.content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getDate() {
        return this.date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return String.format("Message[id=%s, date='%s', content='%s'", id, date, content);
    }

}