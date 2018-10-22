package com.gamez.sftk.issuetraking.Services;

import com.gamez.sftk.issuetraking.Models.Request.Request;
import com.gamez.sftk.issuetraking.Repository.Request.RequestRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
public class RequestService {

    @Autowired
    private RequestRepository requestRepository;

    public Optional<Request> getRequestById(long id) {
        return requestRepository.findById(id);
    }

}
