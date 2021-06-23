package com.laptrinhweb.shoesshop.api;

import com.laptrinhweb.shoesshop.dto.WidthDTO;
import com.laptrinhweb.shoesshop.services.IWidthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/widths")
@CrossOrigin(origins = "*", maxAge = 3600)
public class WidthController {
    public final IWidthService widthService;

    @Autowired
    public WidthController(IWidthService widthService) {
        this.widthService = widthService;
    }

    @GetMapping
    public List<WidthDTO> getSizes() {
        return widthService.getFilterList();
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public WidthDTO saveWidth(@RequestBody WidthDTO widthDTO) {
        return widthService.saveItemFilter(widthDTO);
    }
    @DeleteMapping
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteWidth(@RequestParam("id") Long id) {
        widthService.deleteItem(id);
    }
}
