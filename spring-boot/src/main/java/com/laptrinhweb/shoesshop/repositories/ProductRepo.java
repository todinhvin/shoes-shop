package com.laptrinhweb.shoesshop.repositories;

import com.laptrinhweb.shoesshop.entity.ProductEntity;
import com.laptrinhweb.shoesshop.services.impl.ProductService;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;


@Repository
public interface ProductRepo extends CommonRepo<ProductEntity,Long> {
    ProductEntity findOneById(Long id);

    @Query("select product from ProductEntity  product where lower(product.name) like CONCAT('%',lower(:searchValue) ,'%')")
    List<ProductEntity> getProductByName(@Param("searchValue") String searchValue);

}

