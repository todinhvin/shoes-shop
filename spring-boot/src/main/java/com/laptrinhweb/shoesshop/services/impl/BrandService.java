package com.laptrinhweb.shoesshop.services.impl;

import com.laptrinhweb.shoesshop.converter.BrandConverter;
import com.laptrinhweb.shoesshop.dto.BrandDTO;
import com.laptrinhweb.shoesshop.entity.BrandEntity;
import com.laptrinhweb.shoesshop.repositories.BrandRepo;
import com.laptrinhweb.shoesshop.services.IBrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BrandService extends CommonService<BrandDTO,BrandEntity,BrandRepo, BrandConverter> implements IBrandService {
    private final BrandRepo brandRepo;
    private final BrandConverter brandConverter;
    @Autowired
    public BrandService(BrandRepo brandRepo,BrandConverter brandConverter) {
        super(brandRepo,brandConverter);
        this.brandRepo = brandRepo;
        this.brandConverter =brandConverter;
    }


    @Override
    public BrandDTO saveItemFilter(BrandDTO dto) {
        return saveItem(dto);
    }

    @Override
    public List<BrandDTO> getFilterList() {
        return getList();
    }

    @Override
    public void deleteItem(Long id) {
        delete(id);
    }

    @Override
    public BrandDTO getItem(Long id) {

        return findById(id);
    }


}
