package com.sentence.service;

import javax.enterprise.context.RequestScoped;
import javax.ws.rs.Consumes;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import com.sentence.CountWords;

@RequestScoped
@Path("")
@Produces("application/json")
@Consumes("application/json")
public class ParserService {
	
	CountWords cw;
	
	public ParserService() { 
	}
	
	
}
