package com.laptrinhweb.shoesshop.services.impl;

import com.laptrinhweb.shoesshop.converter.ColorConverter;
import com.laptrinhweb.shoesshop.dto.ColorDTO;
import com.laptrinhweb.shoesshop.entity.ColorEntity;
import com.laptrinhweb.shoesshop.repositories.ColorRepo;
import com.laptrinhweb.shoesshop.services.IColorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ColorService extends CommonService<ColorDTO,ColorEntity,ColorRepo,ColorConverter>implements IColorService {
    private final ColorRepo colorRepo;
    private final ColorConverter colorConverter;
    @Autowired
    public ColorService(ColorRepo colorRepo, ColorConverter colorConverter) {
        super(colorRepo, colorConverter);
        this.colorRepo = colorRepo;
        this.colorConverter = colorConverter;
    }

    @Override
    public ColorDTO saveItemFilter(ColorDTO dto) {
        return saveItem(dto);
    }

    @Override
    public List<ColorDTO> getFilterList() {
        return getList();
    }

    @Override
    public void deleteItem(Long id) {
        delete(id);
    }

    @Override
    public ColorDTO getItem(Long id) {
        return findById(id);
    }
}
