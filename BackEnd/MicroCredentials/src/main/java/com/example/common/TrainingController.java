package com.example.common;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping({"/training"})
public class TrainingController {
	
	@Autowired
	private TrainingService trainingService;
	
	@Autowired
	private MentorService mentorService;
	
	@Autowired
	private TechnologyService technologyService;
	
	@PostMapping
	public Training create(@RequestBody Training training) {
		
//		List <Skill> skillsList = new ArrayList<Skill>();
//		Mentor mentor=MentorService.findById(training.getMentor().getId());
//		training.setMentor(mentor);
//		Technology technology=technologyService.findById(training.getTechnology().getId());
//		System.out.println(training.getCommissionAmount());
//		training.setTechnology(technology);
//		
//		  for(Skill skill:training.getSkills()) {
//		  skillsList.add(skillService.findById(skill.getId())); }
//		  training.setSkills(skillsList);
		
		Technology technology=technologyService.findById(training.getTechnology().getId());
		training.setTechnology(technology);	
		Mentor mentor=mentorService.findById(training.getMentor().getId());
		training.setMentor(mentor);
		return trainingService.create(training);
	}
	
	@GetMapping(path = {"/{id}"})
	public Training findOne(@PathVariable("id") int id) {
		return trainingService.findById(id);
	}
	
	@GetMapping(path="/ChangeCommission/{commission}/{trainingId}")
    public Training ChangeCommission(@PathVariable(value = "commission") Integer commission,
    		@PathVariable(value = "trainingId") Integer trainingId){
	 
	 		Training training=trainingService.findById(trainingId);
	 		training.setCommissionPercent(commission);
	 		 
	 		return trainingService.create(training);
    }
	
	@PutMapping(path = {"/{id}"})
	public Training update(@PathVariable("id") int id, @RequestBody Training training) {
	    training.setId(id);
        return trainingService.update(training);
    }

    @DeleteMapping(path ={"/{id}"})
    public Training delete(@PathVariable("id") int id) {
        return trainingService.delete(id);
    }

    @GetMapping
    public List<Training> findAll(){
        return trainingService.findAll();
    }
    
    @GetMapping("/findTrainingCurrent/{userId}")
    public List<Training> getTrainingCurrent(@PathVariable(value = "userId") int userId) {
        return trainingService.findTrainingCurrent(userId);
    }
    
    @GetMapping("/findTrainingByMentorId/{mentorId}")
    public List<Training> getTrainingByMentorId(@PathVariable(value = "mentorId") int mentorId) {
        return trainingService.findTrainingByMentorId(mentorId);
    }
    
    @GetMapping("/findTrainingByUsersIdAndStatusEquals/{userId}/{status}")
    public List<Training> getTrainingByUsersIdAndStatusEquals(@PathVariable(value = "userId") int userId,@PathVariable(value = "status") String status) {
    	return trainingService.findTrainingByUsersIdAndStatusEquals(userId, status);
    }
    
    @GetMapping("/findTrainingByUsersId/{userId}")
    public List<Training> getTrainingByUsersId(@PathVariable(value = "userId") int userId) {
        return trainingService.findTrainingByUsersId(userId);
    }
    
    
    @GetMapping("/findByIdAndMentorId/{id}/{mentorId}")
    public Training getfindByIdAndMentorId(@PathVariable(value = "id") int Id, @PathVariable(value = "mentorId") int mentorId) {
    	System.out.println(trainingService.findByIdAndMentorId(Id, mentorId));
    	return trainingService.findByIdAndMentorId(Id, mentorId);
    }
    
    @GetMapping("/findByIdAndUsersId/{id}/{userId}")
    public Training getfindByIdAndUserId(@PathVariable(value = "id") int Id, @PathVariable(value = "userId") int userId) {
    	System.out.println(trainingService.findByIdAndUsersId(Id, userId));
    	return trainingService.findByIdAndUsersId(Id, userId);
    }
    
    @GetMapping("/findTrainingByStartDateBetween/{startDate}/{endDate}")
    public List<Training> getfindTrainingByStartDateBetween(@PathVariable(value = "startDate") @DateTimeFormat(pattern = "yyyy-MM-dd") Date startDate, @PathVariable(value = "endDate") @DateTimeFormat(pattern = "yyyy-MM-dd") Date endDate) {
		/*
		 * SimpleDateFormat simpleDateFormat=new SimpleDateFormat("yyyy-MM-dd"); Date
		 * dateStartDate1; try { dateStartDate1 = simpleDateFormat.parse(startDate); }
		 * catch (ParseException e) { dateStartDate1=new Date(); // TODO Auto-generated
		 * catch block e.printStackTrace(); } Date dateStartDate2; try { dateStartDate2
		 * = simpleDateFormat.parse(endDate); } catch (ParseException e) {
		 * dateStartDate2=new Date(); // TODO Auto-generated catch block
		 * e.printStackTrace(); }
		 */
		/*
		 * System.out.println(startDate.getDate()+" "+startDate.getMonth()+" "+startDate
		 * .getYear());
		 * System.out.println(endDate.getDate()+" "+endDate.getMonth()+" "+endDate.
		 * getYear());
		 */
    	return trainingService.findTrainingByStartDateBetween(startDate, endDate);
    }
    

}
