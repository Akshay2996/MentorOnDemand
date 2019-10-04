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
@RequestMapping({"/skill"})
public class SkillController {
	
	@Autowired
	private SkillService skillService;
	
	@PostMapping
	public Skill create(@RequestBody Skill skill) {
		return skillService.create(skill);
	}
	
	@GetMapping(path = {"/{id}"})
	public Skill findOne(@PathVariable("id") int id) {
		return skillService.findById(id);
	}
	
	@PutMapping(path = {"/{id}"})
	public Skill update(@PathVariable("id") int id, @RequestBody Skill skill) {
	    skill.setId(id);
        return skillService.update(skill);
    }

    @DeleteMapping(path ={"/{id}"})
    public Skill delete(@PathVariable("id") int id) {
        return skillService.delete(id);
    }

    @GetMapping
    public List<Skill> findAll(){
        return skillService.findAll();
    } 

}