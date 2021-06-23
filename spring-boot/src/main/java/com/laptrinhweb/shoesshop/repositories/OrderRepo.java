package com.laptrinhweb.shoesshop.repositories;

import com.laptrinhweb.shoesshop.entity.OrderEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OrderRepo extends CommonRepo<OrderEntity,Long> {

    @Query(value = "select * from orders where user_order :=userId",nativeQuery = true)
    List<OrderEntity> getListByUserId(@Param("userId") Long userId);

    @Query(value = "select * from orders o join product p on o.product_ordered =p.id where LOWER(p.name) like CONCAT('%',lower(:searchValue) ,'%')",nativeQuery = true)
    List<OrderEntity> getOrderByName(@Param("searchValue") String searchValue);
}
