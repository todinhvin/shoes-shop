package com.laptrinhweb.shoesshop.converter;

public abstract class CommonConverter<T1,T2> {
    public abstract T1 toDTO(T2 entity);
    public abstract T2 toEntity(T1 dto);
    public abstract T2 toEntity(T1 dto, T2 oldEntity);
}
