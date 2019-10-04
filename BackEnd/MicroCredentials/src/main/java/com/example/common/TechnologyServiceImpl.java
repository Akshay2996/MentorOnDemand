package com.example.common;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TechnologyServiceImpl implements TechnologyService {
	
	@Autowired
	private TechnologyRepository repository;

	@Override
	public Technology create(Technology technology) {
		
		return repository.save(technology);
	}

	@Override
	public Technology delete(int id) {
		Technology technology = findById(id);
		if(technology != null) {
			repository.delete(technology);
		}
		
		return technology;
	}

	@Override
	public List<Technology> findAll() {
		
		return repository.findAll();
	}

	@Override
	public Technology findById(int id) {
		
		return repository.findOne(id);
	}

	@Override
	public Technology update(Technology technology) {
		
		return repository.save(technology);
	}
	
	

}