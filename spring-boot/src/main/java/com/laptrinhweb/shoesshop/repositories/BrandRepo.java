package com.laptrinhweb.shoesshop.repositories;

import com.laptrinhweb.shoesshop.entity.BrandEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BrandRepo extends FilterRepo<BrandEntity,Long> {
}
