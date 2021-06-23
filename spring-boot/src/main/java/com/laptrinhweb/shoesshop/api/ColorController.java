package com.laptrinhweb.shoesshop.api;

import com.laptrinhweb.shoesshop.dto.ColorDTO;
import com.laptrinhweb.shoesshop.services.IColorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/colors")
@CrossOrigin(origins = "*", maxAge = 3600)
public class ColorController {

    public final IColorService colorService;

    @Autowired
    public ColorController(IColorService colorService) {
        this.colorService = colorService;
    }

    @GetMapping
    public List<ColorDTO> getColors() {
        return colorService.getFilterList();
    }

    @GetMapping(path ="/{id}")
    public ColorDTO getColorById(@PathVariable(name = "id") Long id) {
        return colorService.getItem(id);
    }
    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ColorDTO saveColor(@RequestBody ColorDTO colorDTO) {
        return colorService.saveItemFilter(colorDTO);
    }
    @DeleteMapping
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteColor(@RequestParam("id") Long id) {
        colorService.deleteItem(id);
    }
}
