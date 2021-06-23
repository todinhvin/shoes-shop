package com.laptrinhweb.shoesshop.services;

import com.laptrinhweb.shoesshop.entity.ProductEntity;

import java.util.List;

public interface ICommonService<T1,T2,T3,T4> {
    public List<T1> getList();
    public T1 saveItem (T1 dto);
    public void delete(Long id);
    T1 findById(Long id);
    public Long countItems();
}
