package com.gamez.sftk.issuetraking.Controllers;

import com.gamez.sftk.issuetraking.Models.Request.Request;
import com.gamez.sftk.issuetraking.Repository.Request.RequestRepository;
import com.gamez.sftk.issuetraking.Services.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping("/api/request")
public class RequestController {

    @Autowired
    private RequestRepository requestRepository;

    @Autowired
    private RequestService requestService;

    @PostMapping("/add")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
    public @Valid Request insertRequest(@Valid @RequestBody Request request) {
        return requestRepository.save(request);
    }

    @GetMapping("/all")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
    public Iterable<Request> getAllRequest() {
        return requestRepository.findAll();
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
    public Optional<Request> getRequestById(@PathVariable long id) {
        return requestService.getRequestById(id);
    }




    /*
    @GetMapping("/{username}")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
    public Request getRequestByUsername(@PathVariable String username) {
        return requestRepository.findByUsername(username);
    }*/


}
