package com.laptrinhweb.shoesshop.api;

import com.fasterxml.jackson.core.JsonProcessingException;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.laptrinhweb.shoesshop.dto.ProductDTO;
import com.laptrinhweb.shoesshop.dto.ProductPage;
import com.laptrinhweb.shoesshop.dto.ProductSearchCriteria;

import com.laptrinhweb.shoesshop.services.IProductService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import java.util.List;

@RestController
@RequestMapping(path = "api/products")
@CrossOrigin(origins = "*", maxAge = 3600)
public class ProductController {

    private final IProductService productService;
    @Autowired
    public ProductController(IProductService productService) {
        this.productService = productService;
    }


    @GetMapping
    public List<ProductDTO> getProducts(@RequestParam(name = "pagination") String productPage,
                                                       @RequestParam(name = "filter",required = false) String productSearchCriteria) {
        productPage = "{"+productPage+"}";
        ObjectMapper mapper = new ObjectMapper();
        ProductPage productPage1 = null;
        ProductSearchCriteria productSearchCriteria1 = null;
        if(productSearchCriteria==null) {
            productSearchCriteria1 = new ProductSearchCriteria();
        }else {
            try {
                productSearchCriteria = "{"+productSearchCriteria+"}";
                productSearchCriteria1 = mapper.readValue( productSearchCriteria, ProductSearchCriteria.class);
            } catch (JsonProcessingException e) {
                e.printStackTrace();
            }
        }
        try {
            productPage1 = mapper.readValue( productPage, ProductPage.class);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }


        return productService.getList(productPage1,productSearchCriteria1);
    }


    @GetMapping(path = "/countItems")
    public int getCountList( @RequestParam(name = "filter",required = false) String productSearchCriteria) {
        ObjectMapper mapper = new ObjectMapper();
        ProductSearchCriteria productSearchCriteria1 = null;
        if(productSearchCriteria==null) {
            productSearchCriteria1 = new ProductSearchCriteria();
        }else {
            try {
                productSearchCriteria = "{"+productSearchCriteria+"}";
                productSearchCriteria1 = mapper.readValue( productSearchCriteria, ProductSearchCriteria.class);
            } catch (JsonProcessingException e) {
                e.printStackTrace();
            }
        }
        return productService.getCountItemsWithFilter(productSearchCriteria1);
    }

    @GetMapping(path = "/{id}")
    public ProductDTO getOneProduct(@PathVariable(name="id")Long id) {
        return productService.getProductById(id);
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ProductDTO saveProduct(@RequestParam("product") String product, @RequestParam(name="img",required = false)MultipartFile file ) {
        ObjectMapper mapper = new ObjectMapper();
        ProductDTO productDTO = null;
        try {
            productDTO = mapper.readValue(product, ProductDTO.class);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return productService.saveProduct(productDTO,file);
    }


    @DeleteMapping
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteProduct(@RequestParam(value="id")Long id) {
         productService.deleteProduct(id);
    }

    @GetMapping(path = "/search")
    public List<ProductDTO> getProductsSearched(@RequestParam(value = "search") String searchValue) {
        return productService.getProductBySearchName(searchValue);
    }


}
