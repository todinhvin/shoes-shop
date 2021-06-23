package com.laptrinhweb.shoesshop.services.impl;

import com.laptrinhweb.shoesshop.converter.WidthConverter;
import com.laptrinhweb.shoesshop.dto.WidthDTO;
import com.laptrinhweb.shoesshop.entity.WidthEntity;
import com.laptrinhweb.shoesshop.repositories.WidthRepo;
import com.laptrinhweb.shoesshop.services.IWidthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WidthService extends CommonService<WidthDTO,WidthEntity, WidthRepo, WidthConverter> implements IWidthService    {
    private final WidthRepo widthRepo;
    private final WidthConverter widthConverter;

    @Autowired
    public WidthService(WidthRepo widthRepo, WidthConverter widthConverter) {
        super(widthRepo, widthConverter);
        this.widthRepo =widthRepo;
        this.widthConverter = widthConverter;
    }


    @Override
    public WidthDTO saveItemFilter(WidthDTO dto) {
        return saveItem(dto);
    }

    @Override
    public List<WidthDTO> getFilterList() {
        return getList();
    }

    @Override
    public void deleteItem(Long id) {
        delete(id);
    }
}
