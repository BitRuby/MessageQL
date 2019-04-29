package com.messageql.controller;

import com.messageql.model.User;
import com.messageql.repositories.UserDALImpl;

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
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

    @Autowired
    UserDALImpl userRepository;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ResponseEntity<User> users(@RequestParam String id) {
        return new ResponseEntity<User>(userRepository.getUser(id), HttpStatus.OK);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public ResponseEntity<User> create(@RequestBody User user) {
        return new ResponseEntity<User>(userRepository.saveUser(user), HttpStatus.CREATED);
    }

}