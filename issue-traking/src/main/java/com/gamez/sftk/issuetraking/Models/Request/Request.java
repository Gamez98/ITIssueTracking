package com.gamez.sftk.issuetraking.Models.Request;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.gamez.sftk.issuetraking.Models.Role.Role;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="requests")
public class Request {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, unique = true, updatable = false)
    private Long id;

    @NotBlank
    @Size(max = 45)
    @Column(name = "requested_by")
    private String requested_by;

    @NotBlank
    @Size(max = 45)
    @Column(name = "a_group")
    private String a_group;

    @NotBlank
    @Size(max = 20)
    @Column(name = "phone")
    private String phone;

    @NotBlank
    @Size(max = 45)
    @Column(name = "site")
    private String site;

    @NotBlank
    @Column(name = "request_day")
    private String request_day;

    @NotBlank
    @Size(max = 45)
    @Column(name = "title")
    private String title;

    @NotBlank
    @Size(max = 1000)
    @Column(name = "description")
    private String description;

    @NotBlank
    @Size(max = 10)
    @Column(name = "status")
    private String status;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRequested_by() {
        return requested_by;
    }

    public void setRequested_by(String requested_by) {
        this.requested_by = requested_by;
    }

    public String getA_group() {
        return a_group;
    }

    public void setA_group(String a_group) {
        this.a_group = a_group;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getSite() {
        return site;
    }

    public void setSite(String site) {
        this.site = site;
    }

    public String getRequest_day() {
        return request_day;
    }

    public void setRequest_day(String request_day) {
        this.request_day = request_day;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

}
