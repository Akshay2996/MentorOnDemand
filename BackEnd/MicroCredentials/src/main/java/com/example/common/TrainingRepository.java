package com.example.common;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

public interface TrainingRepository extends Repository<Training, Integer>{
		
		void delete(Training training);
		
		List<Training> findAll();
		
		Training findOne(int id);
		
		Training save(Training training);
		
		@Query("select training from Training training where training.mentor.id=?")
		List<Training> findTrainingByMentorId(int mentorId);
		
		//@Query("select training from Training training where training.userId=? and training.progress='completed' ")
		List<Training> findTrainingByUsersId(int userId);
		
		List<Training> findTrainingByUsersIdAndStatusEquals(int userId,String status);
		
		@Query("select training from Training training where training.startDate between ? and ?")
		List<Training> findTrainingByStartDateBetween(Date startDate, Date endDate);
		
		
		@Query("select training from Training training where training.id=? and training.mentor.id=?")
		Training findByIdAndMentorId(int Id, int mentorId);
		
		//@Query("select training from Training training where training.id=? and training.users.userId=?")
		Training findByIdAndUsersId(int Id, int userId);
		

	}

