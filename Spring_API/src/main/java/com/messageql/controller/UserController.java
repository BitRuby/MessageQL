package com.messageql.controller;

import com.messageql.model.User;
import com.messageql.repositories.UserDALImpl;

import com.mongodb.client.result.UpdateResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Collection;
import java.util.List;

@Controller
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

    @Autowired
    UserDALImpl userRepository;

    @RequestMapping(value = "/one", method = RequestMethod.GET)
    public ResponseEntity<User> users(@RequestParam String id) {
        return new ResponseEntity<User>(userRepository.getUser(id), HttpStatus.OK);
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public ResponseEntity<List<User>> usersAll(@RequestParam int limit) {
        return new ResponseEntity<List<User>>(userRepository.getUsers(limit), HttpStatus.OK);
    }



    @RequestMapping(value = "/", method = RequestMethod.POST)
    public ResponseEntity<User> create(@RequestBody User user) {
        return new ResponseEntity<User>(userRepository.saveUser(user), HttpStatus.CREATED);
    }

    @RequestMapping(value = "/insert", method = RequestMethod.POST)
    public ResponseEntity<List<User>> insert() {
        return new ResponseEntity<List<User>>(userRepository.insert(), HttpStatus.CREATED);
    }

    @RequestMapping(value = "/update", method = RequestMethod.PATCH)
    public ResponseEntity<List<User>> update() {
        return new ResponseEntity<List<User>>(userRepository.update(), HttpStatus.OK);
    }

    @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
    public ResponseEntity<List<User>> delete() {
        return new ResponseEntity<List<User>>(userRepository.delete(), HttpStatus.OK);
    }


}