package com.example.common;

import java.util.List;

import org.springframework.data.repository.Repository;

public interface PaymentRepository extends Repository<Payment, Integer>{
	
	void delete(Payment payment);
	
	List<Payment> findAll();
	
	Payment findOne(int id);
	
	Payment save(Payment payment);
	
	List<Payment> findPaymentByMentorId(int mentorId);
	
	List<Payment> findPaymentByUserId(int userId);

}
