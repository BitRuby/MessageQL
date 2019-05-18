package com.example.demo;

import com.example.demo.model.User;
import com.example.demo.repositories.ConversationDALImpl;
import com.example.demo.repositories.MessageDALImpl;
import com.example.demo.repositories.UserDALImpl;
import com.example.demo.resolver.root.Mutation;
import com.example.demo.resolver.root.Query;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import graphql.Scalars;
import graphql.schema.GraphQLObjectType;
import graphql.schema.GraphQLSchema;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Bean
	public Query query(ConversationDALImpl conversation, MessageDALImpl message, UserDALImpl user) {
		return new Query(conversation, message, user);
	}

	@Bean
	public Mutation mutation(ConversationDALImpl conversation, MessageDALImpl message, UserDALImpl user) {
		return new Mutation(conversation, message, user);
	}

	@Bean
	public CommandLineRunner demo(UserDALImpl userRepo) {
		return (args) -> {
			userRepo.saveUser("Herbert", "Schildt");
		};
	}

}
