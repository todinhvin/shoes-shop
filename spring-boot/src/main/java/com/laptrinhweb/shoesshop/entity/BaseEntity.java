package com.laptrinhweb.shoesshop.entity;


import org.springframework.data.annotation.*;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import java.util.Date;

@MappedSuperclass
public abstract class BaseEntity {

   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;

    @CreatedDate
    @Column(name = "createdate")
    private Date createdDate;

    @CreatedBy
    @Column(name="createdby")
    private String createdBy;

    @LastModifiedDate
    @Column(name="modifieddate")
    private Date modifiedDate;

    @LastModifiedBy
    @Column(name = "modifiedby")
    private String modifiedBy;

    public Long getId() {
        return id;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public Date getModifiedDate() {
        return modifiedDate;
    }

    public String getModifiedBy() {
        return modifiedBy;
    }
}
