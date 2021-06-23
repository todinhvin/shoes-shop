package com.laptrinhweb.shoesshop.repositories;

import com.laptrinhweb.shoesshop.entity.BrandEntity;
import com.laptrinhweb.shoesshop.entity.ColorEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ColorRepo extends FilterRepo<ColorEntity, Long>{
}
