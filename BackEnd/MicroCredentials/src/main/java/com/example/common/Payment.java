package com.example.common;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name="payment")
public class Payment extends AuditModel {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column(name="txn_type", nullable=false)
	private String txnType;
	
	@Column(name="amount", nullable=false)
	private int amount;
	
	@Column(name="tech_name")
	private String techName;
	
	@Column(name="mentor_name")
	private String mentorName;
	
	@Column(name="remarks")
	private String remarks;
	
	@Column(name="mentor_id")
	private int mentorId;
	
	@Column(name="user_id")
	private int userId;
	
	@Column(name="training_id")
	private int trainingId;
	
	@Column(name="totalAmountToMentor")
	private int totalAmountToMentor = 0;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	public void setamountremark(String remark, Integer amount)
	{
		if(remark.equals(this.remarks))
		{
			return;
		}
		else
		{
			this.remarks=remark;
			this.totalAmountToMentor=this.totalAmountToMentor+amount;
		}
	}
	

	public String getMentorName() {
		return mentorName;
	}

	public void setMentorName(String mentorName) {
		this.mentorName = mentorName;
	}

	public String getTechName() {
		return techName;
	}

	public void setTechName(String techName) {
		this.techName = techName;
	}

	public String getTxnType() {
		return txnType;
	}

	public void setTxnType(String txnType) {
		this.txnType = txnType;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public int getMentorId() {
		return mentorId;
	}

	public void setMentorId(int mentorId) {
		this.mentorId = mentorId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getTrainingId() {
		return trainingId;
	}

	public void setTrainingId(int trainingId) {
		this.trainingId = trainingId;
	}

	public int getTotalAmountToMentor() {
		return totalAmountToMentor;
	}

	public void setTotalAmountToMentor(int totalAmountToMentor) {
		this.totalAmountToMentor = totalAmountToMentor;
	}

	public void paymenttrainer(Integer amount) {
		// TODO Auto-generated method stub
		this.totalAmountToMentor = this.totalAmountToMentor + amount;
	}
	
	
	/*
	 * @ManyToMany(mappedBy = "payment") List<Training> training;
	 */



	


	/*
	 * public List<Training> getTraining() { return training; }
	 * 
	 * public void setTraining(List<Training> training) { this.training = training;
	 * }
	 */
	
	
	
	
	
}
