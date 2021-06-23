//package com.laptrinhweb.shoesshop.converter;
//
//import com.laptrinhweb.shoesshop.dto.BrandDTO;
//import com.laptrinhweb.shoesshop.dto.FilterDTO;
//import com.laptrinhweb.shoesshop.entity.BrandEntity;
//import com.laptrinhweb.shoesshop.entity.FilterEntity;
//import org.springframework.stereotype.Component;
//
//@Component
//public class FilterConverter<T1 extends FilterDTO<T1>,T2 extends FilterEntity<T2>>  extends CommonConverter<T1,T2>{
//
//
//    @Override
//    public T1 toDTO(T2 entity) {
//        T1 dto = (T1) new FilterDTO<T1>();
//        dto.setId(entity.getId());
//        dto.setCode(entity.getCode());
//        dto.setName(entity.getName());
//        return dto;
//    }
//
//    @Override
//    public T2 toEntity(T1 dto) {
//        T2 entity = (T2) new FilterEntity<T2>();
//        entity.setCode(dto.getCode());
//        entity.setName(dto.getName());
//        return entity;
//    }
//
//    @Override
//    public T2 toEntity(T1 dto, T2 oldEntity) {
//        return null;
//    }
//}
