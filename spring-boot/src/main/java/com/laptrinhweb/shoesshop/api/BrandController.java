package com.laptrinhweb.shoesshop.api;

import com.laptrinhweb.shoesshop.dto.BrandDTO;
import com.laptrinhweb.shoesshop.dto.ColorDTO;
import com.laptrinhweb.shoesshop.services.IBrandService;
import com.laptrinhweb.shoesshop.services.IColorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/brands")
@CrossOrigin(origins = "*", maxAge = 3600)
public class BrandController {

    public final IBrandService brandService;

    @Autowired
    public BrandController(IBrandService brandService) {
        this.brandService = brandService;
    }

    @GetMapping
    public List<BrandDTO> getBrands() {
        return brandService.getFilterList();
    }

    @GetMapping(path = "/{id}")
    public BrandDTO getBrandById(@PathVariable(name="id")Long id) {
        return brandService.getItem(id);
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public BrandDTO saveBrand(@RequestBody BrandDTO brandDTO) {
        return brandService.saveItemFilter(brandDTO);
    }
    @DeleteMapping
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteBrand(@RequestParam("id") Long id) {
        brandService.deleteItem(id);
    }
}
