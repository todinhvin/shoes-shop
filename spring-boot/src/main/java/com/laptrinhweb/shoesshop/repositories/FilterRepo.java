package com.laptrinhweb.shoesshop.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.stereotype.Repository;

import java.io.Serializable;

@NoRepositoryBean
public interface FilterRepo<T,T2> extends CommonRepo<T,T2> {
}
