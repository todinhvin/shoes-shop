package com.laptrinhweb.shoesshop.converter;

import com.laptrinhweb.shoesshop.dto.BrandDTO;
import com.laptrinhweb.shoesshop.dto.ColorDTO;
import com.laptrinhweb.shoesshop.dto.FilterDTO;
import com.laptrinhweb.shoesshop.entity.BrandEntity;
import com.laptrinhweb.shoesshop.entity.ColorEntity;
import org.springframework.stereotype.Component;

@Component
public class ColorConverter extends CommonConverter<ColorDTO,ColorEntity> {
    public ColorDTO toDTO(ColorEntity entity) {
        ColorDTO dto =  new ColorDTO();
        dto.setId(entity.getId());
        dto.setName(entity.getName());
        return dto;
    }
    public ColorEntity toEntity(ColorDTO dto) {
        ColorEntity entity = new ColorEntity();
        entity.setName(dto.getName());
        return entity;
    }

    @Override
    public ColorEntity toEntity(ColorDTO dto, ColorEntity oldEntity) {
        oldEntity.setName(dto.getName());
        return oldEntity;
    }
}
