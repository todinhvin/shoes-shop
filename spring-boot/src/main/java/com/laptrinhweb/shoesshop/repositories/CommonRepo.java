package com.laptrinhweb.shoesshop.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface CommonRepo<T1,T2> extends JpaRepository<T1,T2> {
    T1 findOneById(T2 id);

}
