package com.laptrinhweb.shoesshop.converter;

import com.laptrinhweb.shoesshop.dto.BrandDTO;
import com.laptrinhweb.shoesshop.dto.FilterDTO;
import com.laptrinhweb.shoesshop.entity.BrandEntity;
import com.laptrinhweb.shoesshop.entity.FilterEntity;
import org.springframework.stereotype.Component;

@Component
public class BrandConverter extends CommonConverter<BrandDTO,BrandEntity> {
    public BrandDTO toDTO(BrandEntity entity) {
        BrandDTO dto =  new BrandDTO();
        dto.setId(entity.getId());
        dto.setName(entity.getName());
        return dto;
    }

    @Override
    public BrandEntity toEntity(BrandDTO dto) {
        BrandEntity entity = new BrandEntity();
        entity.setName(dto.getName());
        return entity;
    }

    @Override
    public BrandEntity toEntity(BrandDTO dto, BrandEntity oldEntity) {
        oldEntity.setName(dto.getName());
        return oldEntity;
    }
}
