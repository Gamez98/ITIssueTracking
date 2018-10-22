package com.gamez.sftk.issuetraking.Services;

import com.gamez.sftk.issuetraking.Models.User.User;
import com.gamez.sftk.issuetraking.Repository.User.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

   @Autowired
   private UserRepository userRepository;

   public List<User> GetAllUsers() {
       return this.userRepository.findAll();
   }

   public Optional<User> GetUserByID(Long id) {
       return this.userRepository.findById(id);
   }

}
