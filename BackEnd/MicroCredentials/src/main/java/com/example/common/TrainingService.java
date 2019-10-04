package com.example.common;

import java.util.Date;
import java.util.List;

public interface TrainingService {
	
	Training create(Training training);
	
	Training delete(int id);
	
	List<Training> findAll();
	
	Training findById(int id);
	
	Training update(Training training);
	
	List<Training> findTrainingByMentorId(int mentorId);
	
	List<Training> findTrainingByUsersId(int userId);
	
	Training findByIdAndMentorId(int id, int mentorId);
	
	Training findByIdAndUsersId(int Id, int userId);
	
	List<Training> findTrainingCurrent(int userId);
	
	List<Training> findTrainingByUsersIdAndStatusEquals(int userId,String progress);
	
	List<Training> findTrainingByStartDateBetween(Date startDate, Date endDate);
	
}
