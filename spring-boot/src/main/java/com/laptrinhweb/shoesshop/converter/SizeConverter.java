package com.laptrinhweb.shoesshop.converter;

import com.laptrinhweb.shoesshop.dto.BrandDTO;
import com.laptrinhweb.shoesshop.dto.ColorDTO;
import com.laptrinhweb.shoesshop.dto.SizeDTO;
import com.laptrinhweb.shoesshop.entity.BrandEntity;
import com.laptrinhweb.shoesshop.entity.ColorEntity;
import com.laptrinhweb.shoesshop.entity.SizeEntity;
import org.springframework.stereotype.Component;

@Component
public class SizeConverter extends CommonConverter<SizeDTO,SizeEntity>  {
    public SizeDTO toDTO(SizeEntity entity) {
        SizeDTO dto =  new SizeDTO();
        dto.setId(entity.getId());
        dto.setName(entity.getName());
        return dto;
    }

    @Override
    public SizeEntity toEntity(SizeDTO dto) {
        SizeEntity entity = new SizeEntity();
        entity.setName(dto.getName());
        return entity;
    }

    @Override
    public SizeEntity toEntity(SizeDTO dto, SizeEntity oldEntity) {
        oldEntity.setName(dto.getName());
        return oldEntity;
    }
}
