package com.laptrinhweb.shoesshop.services;

import com.laptrinhweb.shoesshop.converter.ColorConverter;
import com.laptrinhweb.shoesshop.dto.ColorDTO;
import com.laptrinhweb.shoesshop.entity.ColorEntity;


public interface IColorService extends IFilterService<ColorDTO>{
    ColorDTO getItem(Long id);
}
