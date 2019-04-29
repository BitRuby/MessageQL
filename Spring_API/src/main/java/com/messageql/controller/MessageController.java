package com.messageql.controller;

import com.messageql.model.Message;
import com.messageql.repositories.MessageDALImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/message")
@CrossOrigin("*")
public class MessageController {

    @Autowired
    MessageDALImpl messageRepository;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ResponseEntity<Message> getMessage(@RequestParam String id) {
        return new ResponseEntity<Message>(messageRepository.getMessage(id), HttpStatus.OK);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public ResponseEntity<Message> newMessage(@RequestBody Message message) {
        return new ResponseEntity<Message>(messageRepository.createMessage(message), HttpStatus.OK);
    }

}