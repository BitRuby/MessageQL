package com.messageql.controller;

import com.messageql.model.Conversation;
import com.messageql.repositories.ConversationDALImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/conversation")
@CrossOrigin("*")
public class ConversationController {

    @Autowired
    ConversationDALImpl conversationRepository;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ResponseEntity<Conversation> getMessage(@RequestParam String id) {
        return new ResponseEntity<Conversation>(conversationRepository.getConversation(id), HttpStatus.OK);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public ResponseEntity<Conversation> newMessage() {
        return new ResponseEntity<Conversation>(conversationRepository.saveConversation(), HttpStatus.CREATED);
    }

    @RequestMapping(value = "/join", method = RequestMethod.POST)
    public ResponseEntity<Conversation> joinConversation(@RequestParam String id) {
        return new ResponseEntity<Conversation>(conversationRepository.joinConversation(id), HttpStatus.CREATED);
    }

    @RequestMapping(value = "/", method = RequestMethod.DELETE)
    public ResponseEntity<Conversation> deleteConversation(@RequestParam String id) {
        return new ResponseEntity<Conversation>(conversationRepository.deleteConversation(id), HttpStatus.OK);
    }

    @RequestMapping(value = "/leave", method = RequestMethod.POST)
    public ResponseEntity<Conversation> leaveCovnersation(@RequestParam String id) {
        return new ResponseEntity<Conversation>(conversationRepository.leaveConversation(id), HttpStatus.CREATED);
    }

}