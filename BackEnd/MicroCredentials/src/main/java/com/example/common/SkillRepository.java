package com.example.common;

import java.util.List;

import org.springframework.data.repository.Repository;

public interface SkillRepository extends Repository<Skill, Integer>{
	
	void delete(Skill skill);
	
	List<Skill> findAll();
	
	Skill findOne(int id);
	
	Skill save(Skill skill);

}
