package com.laptrinhweb.shoesshop.repositories;

import java.util.Optional;

import com.laptrinhweb.shoesshop.entity.ERole;
import com.laptrinhweb.shoesshop.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findByName(ERole name);
}
