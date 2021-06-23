package com.laptrinhweb.shoesshop.services.impl;

import com.laptrinhweb.shoesshop.converter.ProductConverter;
import com.laptrinhweb.shoesshop.dto.ProductDTO;
import com.laptrinhweb.shoesshop.dto.ProductPage;
import com.laptrinhweb.shoesshop.dto.ProductSearchCriteria;
import com.laptrinhweb.shoesshop.entity.ProductEntity;
import com.laptrinhweb.shoesshop.repositories.ProductCriteriaRepository;
import com.laptrinhweb.shoesshop.repositories.ProductRepo;
import com.laptrinhweb.shoesshop.services.IProductService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
@Service
public class ProductService extends CommonService<ProductDTO,ProductEntity,ProductRepo,ProductConverter> implements IProductService {
    private final ProductRepo productRepo;
    private final ProductConverter productConverter;
    private final ProductCriteriaRepository productCriteriaRepository;

    @Autowired
    public ProductService(ProductRepo productRepo, ProductConverter productConverter, ProductCriteriaRepository productCriteriaRepository) {
        super(productRepo,productConverter);
        this.productRepo = productRepo;
        this.productConverter = productConverter;
        this.productCriteriaRepository = productCriteriaRepository;
    }

    public List<ProductDTO> getList (ProductPage productPage,
                                     ProductSearchCriteria productSearchCriteria){
        List<ProductEntity> entities = productCriteriaRepository.findAllWithFilters(productPage,productSearchCriteria);
        List<ProductDTO>  list = new ArrayList<>();
        for(int i =0;i<entities.size();i++) {
            list.add(productConverter.toDTO(entities.get(i)));
        }
        return list;
    }

    @Override
    public List<ProductDTO> getProductBySearchName(String searchName) {
        List<ProductEntity> entities = new ArrayList<>();
        if(searchName!=""){
            entities = productRepo.getProductByName(searchName);
        }else {
            entities = productRepo.findAll();
        }
        List<ProductDTO>  list = new ArrayList<>();
        for(int i =0;i<entities.size();i++) {
            list.add(productConverter.toDTO(entities.get(i)));
        }
        return list;
    }

    @Override
    public int getCountItemsWithFilter( ProductSearchCriteria productSearchCriteria) {
        return productCriteriaRepository.countProductsWithFilter(productSearchCriteria) ;
    }


    public ProductDTO saveProduct (ProductDTO dto, MultipartFile file) {
//        if(file!=null) {
//            String uploadDirectory = System.getProperty("user.dir").substring(0,System.getProperty("user.dir").length()-12)+"/frontend/public/images";
//            String filename = dto.getName() + file.getOriginalFilename().substring(file.getOriginalFilename().length() - 4);
//            Path fileNameAndPath = Paths.get(uploadDirectory, filename);
//            try {
//                Files.write(fileNameAndPath, file.getBytes());
//            } catch (IOException e) {
//                e.printStackTrace();
//            }
//            fileNameAndPath = Paths.get(System.getProperty("user.dir").substring(0, System.getProperty("user.dir").length() - 12) + "/admin/public/admin/vendors/images", filename);
//            try {
//                Files.write(fileNameAndPath, file.getBytes());
//            } catch (IOException e) {
//                e.printStackTrace();
//            }
//            dto.setThumbnail(filename);
//        }
        return saveItem(dto);
    }

    @Override
    public void deleteProduct(Long id) {
        delete(id);
    }

    @Override
    public ProductDTO getProductById(Long id) {
        return findById(id);
    }
}
