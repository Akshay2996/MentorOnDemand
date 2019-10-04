package com.example.common;

import java.util.List;

public interface MentorService {
	
	Mentor create(Mentor mentor);
	
	Mentor delete(int id);
	
	List<Mentor> findAll();
	
	Mentor findById(int id);
	
	Mentor update(Mentor mentor);

	Mentor findMentor(String userName, String password);

}
