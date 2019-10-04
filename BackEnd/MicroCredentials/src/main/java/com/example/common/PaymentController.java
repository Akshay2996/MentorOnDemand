package com.example.common;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
@RequestMapping({"/payment"})
public class PaymentController {
	
	@Autowired
	private PaymentService paymentService;
	
	@Autowired
	private TrainingService trainingService;
	
	@PostMapping
	public Payment create(@RequestBody Payment payment) {
		return paymentService.create(payment);
	}
	
	@GetMapping(path = "/{amount}/{remark}/{id}")
    public Payment SetAmount(@PathVariable("amount") Integer amount,@PathVariable("remark") String remark,@PathVariable("id") Integer id){
    	
    	Payment payment=paymentService.findById(id);
    	//payment.paymenttrainer(amount);
    	//payment.setRemarks(remark);
    	Training training=trainingService.findById(payment.getTrainingId());
    	training.setAmounttoMentor(amount);
    	payment.setamountremark(remark, amount);
    	trainingService.create(training);
        return paymentService.create(payment);
    }
	
	@GetMapping(path = {"/{id}"})
	public Payment findOne(@PathVariable("id") int id) {
		return paymentService.findById(id);
	}
	
	@GetMapping("/findPaymentByMentorId/{mentorId}")
		public List<Payment> getPaymentByMentorId(@PathVariable(value = "mentorId") int mentorId) {
			return paymentService.findPaymentByMentorId(mentorId);
		}
	
	@PutMapping(path = {"/{id}"})
	public Payment update(@PathVariable("id") int id, @RequestBody Payment payment) {
	    payment.setId(id);
        return paymentService.update(payment);
    }

    @DeleteMapping(path ={"/{id}"})
    public Payment delete(@PathVariable("id") int id) {
        return paymentService.delete(id);
    }

    @GetMapping
    public List<Payment> findAll(){
        return paymentService.findAll();
    }
    
    @GetMapping(path = {"/payfees/{id}/{amount}"})
    public Payment payfees(@PathVariable("id") int id,@PathVariable("amount") int amount){
    	Payment payment=paymentService.findById(id);
    	Training training=trainingService.findById(payment.getTrainingId());
    	payment.setAmount(amount);
    	training.setAmountReceived(amount);
    	trainingService.create(training);
        return paymentService.create(payment);
    }
      
      
      
        @GetMapping("/findPaymentByUserId/{userId}")
    public List < Payment > findPaymentByUserId(@PathVariable(value = "userId") int userId) {
        return paymentService.findPaymentByUserId(userId);
    }
        
        @GetMapping(path = {"/withdraw/{id}/{amount}"})
	    public Payment withdraw(@PathVariable("id") int id,@PathVariable("amount") int amount){
	    	Payment payment=paymentService.findById(id);
	    	payment.paymenttrainer(-amount);
	        return paymentService.create(payment);
	    }

}
