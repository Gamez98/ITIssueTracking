package com.gamez.sftk.issuetraking.Controllers;


import com.gamez.sftk.issuetraking.Models.User.User;
import com.gamez.sftk.issuetraking.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/all")
    public List<User> GetAllUsers() {
        return userService.GetAllUsers();
    }

    @GetMapping("/{id}")
    public Optional<User> GetUserByID(@PathVariable long id) {
        return userService.GetUserByID(id);
    }



}
