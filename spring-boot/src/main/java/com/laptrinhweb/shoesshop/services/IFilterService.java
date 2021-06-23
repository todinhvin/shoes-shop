package com.laptrinhweb.shoesshop.services;

import com.laptrinhweb.shoesshop.dto.FilterDTO;

import java.util.List;

public interface IFilterService<T> {
    T saveItemFilter(T dto);
    List<T> getFilterList();
    void deleteItem(Long id);

}
