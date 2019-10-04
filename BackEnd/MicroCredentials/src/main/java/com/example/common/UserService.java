package com.example.common;

import java.util.List;

public interface UserService {
	
	User create(User user);
	
	User delete(int id);
	
	List<User> findAll();
	
	User findById(int id);
	
	User update(User user);

	User findUser(String userName, String password);

}
