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
@RequestMapping({"/technology"})
public class TechnologyController {
	
	@Autowired
	private TechnologyService technologyService;
	
	@PostMapping
	public Technology create(@RequestBody Technology technology) {
		return technologyService.create(technology);
	}
	
	@GetMapping(path = {"/{id}"})
	public Technology findOne(@PathVariable("id") int id) {
		return technologyService.findById(id);
	}
	
	@PutMapping(path = {"/{id}"})
	public Technology update(@PathVariable("id") int id, @RequestBody Technology technology) {
	    technology.setId(id);
        return technologyService.update(technology);
    }

    @DeleteMapping(path ={"/{id}"})
    public Technology delete(@PathVariable("id") int id) {
        return technologyService.delete(id);
    }

    @GetMapping
    public List<Technology> findAll(){
        return technologyService.findAll();
    } 

}

