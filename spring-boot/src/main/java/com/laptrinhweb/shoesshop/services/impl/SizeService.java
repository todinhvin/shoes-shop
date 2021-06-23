package com.laptrinhweb.shoesshop.services.impl;

import com.laptrinhweb.shoesshop.converter.SizeConverter;
import com.laptrinhweb.shoesshop.dto.SizeDTO;
import com.laptrinhweb.shoesshop.entity.SizeEntity;
import com.laptrinhweb.shoesshop.repositories.SizeRepo;
import com.laptrinhweb.shoesshop.services.ISizeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SizeService extends CommonService<SizeDTO, SizeEntity,SizeRepo, SizeConverter> implements ISizeService {
    private final SizeRepo sizeRepo;
    private final SizeConverter sizeConverter;
    @Autowired
    public SizeService(SizeRepo sizeRepo,SizeConverter sizeConverter) {
        super(sizeRepo,sizeConverter);
        this.sizeConverter = sizeConverter;
        this.sizeRepo = sizeRepo;
    }

    @Override
    public SizeDTO saveItemFilter(SizeDTO dto) {
        return saveItem(dto);
    }

    @Override
    public List<SizeDTO> getFilterList() {
        return getList();
    }

    @Override
    public void deleteItem(Long id) {
        delete(id);
    }
}
