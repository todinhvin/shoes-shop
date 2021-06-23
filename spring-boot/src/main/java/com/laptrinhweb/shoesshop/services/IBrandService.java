package com.laptrinhweb.shoesshop.services;

import com.laptrinhweb.shoesshop.dto.BrandDTO;
import com.laptrinhweb.shoesshop.entity.BrandEntity;

public interface IBrandService  extends IFilterService<BrandDTO>{
    BrandDTO getItem(Long id);
}
