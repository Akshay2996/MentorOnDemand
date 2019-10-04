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
@RequestMapping({"/user"})
public class UserController {
	
	@Autowired
	private UserService userService;
	
	/*
	 * @Autowired private TrainingService trainingService;
	 */
	
	@PostMapping
	public User create(@RequestBody User user) {
		return userService.create(user);
	}
	
	/*
	 * @PostMapping public User create(@RequestBody User user) { Training training =
	 * trainingService.findById(user.getTrainingId());
	 * 
	 * if(training!=null) { training.getUser().add(user);
	 * trainingService.create(training); }
	 * 
	 * return user; }
	 */
	
	@GetMapping(path = {"/{id}"})
	public User findOne(@PathVariable("id") int id) {
		return userService.findById(id);
	}
	
	@GetMapping(path = {"/{userName}/{password}"})
	public User findUser(@PathVariable("userName") String userName, @PathVariable("password") String password) {
		return userService.findUser(userName, password);
	}
	
	@PutMapping(path = {"/{id}"})
	public User update(@PathVariable("id") int id, @RequestBody User user) {
	    user.setId(id);
        return userService.update(user);
    }

    @DeleteMapping(path ={"/{id}"})
    public User delete(@PathVariable("id") int id) {
        return userService.delete(id);
    }

    @GetMapping
    public List<User> findAll(){
        return userService.findAll();
    } 

}
