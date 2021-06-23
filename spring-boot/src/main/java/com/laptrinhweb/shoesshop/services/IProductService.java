package com.laptrinhweb.shoesshop.services;

import com.laptrinhweb.shoesshop.dto.ProductDTO;
import com.laptrinhweb.shoesshop.dto.ProductPage;
import com.laptrinhweb.shoesshop.dto.ProductSearchCriteria;
import com.laptrinhweb.shoesshop.dto.SelectDTO;
import com.laptrinhweb.shoesshop.entity.ProductEntity;
import org.springframework.data.domain.Page;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface IProductService {
    ProductDTO saveProduct (ProductDTO dto, MultipartFile file);
    void deleteProduct(Long id);
    ProductDTO getProductById(Long id);
    List<ProductDTO> getList (ProductPage productPage,ProductSearchCriteria productSearchCriteria);
    List<ProductDTO> getProductBySearchName(String searchName);
    int getCountItemsWithFilter( ProductSearchCriteria productSearchCriteria);
}
