package com.example.common;

import java.util.List;

import org.springframework.data.repository.Repository;

public interface TechnologyRepository extends Repository<Technology, Integer>{
	
	void delete(Technology technology);
	
	List<Technology> findAll();
	
	Technology findOne(int id);
	
	Technology save(Technology technology);

}

