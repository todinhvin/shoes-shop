package com.laptrinhweb.shoesshop.converter;

import com.laptrinhweb.shoesshop.dto.ColorDTO;
import com.laptrinhweb.shoesshop.dto.WidthDTO;
import com.laptrinhweb.shoesshop.entity.ColorEntity;
import com.laptrinhweb.shoesshop.entity.WidthEntity;
import org.springframework.stereotype.Component;

@Component
public class WidthConverter extends CommonConverter<WidthDTO, WidthEntity> {
    @Override
    public WidthDTO toDTO(WidthEntity entity) {
        WidthDTO dto = new WidthDTO();
        dto.setId(entity.getId());
        dto.setName(entity.getName());
        return dto;
    }

    @Override
    public WidthEntity toEntity(WidthDTO dto) {
        WidthEntity entity = new WidthEntity();
        entity.setName(dto.getName());
        return entity;
    }

    @Override
    public WidthEntity toEntity(WidthDTO dto, WidthEntity oldEntity) {
        oldEntity.setName(dto.getName());
        return oldEntity;
    }

}
