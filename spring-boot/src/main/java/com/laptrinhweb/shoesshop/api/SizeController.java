package com.laptrinhweb.shoesshop.api;

import com.laptrinhweb.shoesshop.dto.ColorDTO;
import com.laptrinhweb.shoesshop.dto.SizeDTO;
import com.laptrinhweb.shoesshop.services.IColorService;
import com.laptrinhweb.shoesshop.services.ISizeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/sizes")
@CrossOrigin(origins = "*", maxAge = 3600)
public class SizeController {

    public final ISizeService sizeService;

    @Autowired
    public SizeController(ISizeService sizeService) {
        this.sizeService = sizeService;
    }

    @GetMapping
    public List<SizeDTO> getSizes() {
        return sizeService.getFilterList();
    }
    
    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public SizeDTO saveColor(@RequestBody SizeDTO sizeDTO) {
        return sizeService.saveItemFilter(sizeDTO);
    }
    @DeleteMapping
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteColor(@RequestParam("id") Long id) {
        sizeService.deleteItem(id);
    }
}
