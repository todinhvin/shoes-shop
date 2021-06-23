package com.laptrinhweb.shoesshop.services.impl;

import com.laptrinhweb.shoesshop.converter.OrderConverter;
import com.laptrinhweb.shoesshop.dto.OrderDTO;
import com.laptrinhweb.shoesshop.dto.ProductDTO;
import com.laptrinhweb.shoesshop.dto.ProductPage;
import com.laptrinhweb.shoesshop.entity.OrderEntity;
import com.laptrinhweb.shoesshop.entity.ProductEntity;
import com.laptrinhweb.shoesshop.repositories.OrderRepo;
import com.laptrinhweb.shoesshop.services.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrderService extends CommonService<OrderDTO,OrderEntity, OrderRepo, OrderConverter> implements IOrderService {
    private OrderRepo orderRepo;
    private OrderConverter orderConverter;

    @Autowired
    public OrderService(OrderRepo orderRepo, OrderConverter orderConverter) {
        super(orderRepo, orderConverter);
        this.orderRepo = orderRepo;
        this.orderConverter = orderConverter;
    }

    @Override
    public List<OrderDTO> getOrderList(ProductPage orderPage) {
        Pageable pageable =  PageRequest.of(orderPage.getPageNumber()-1,orderPage.getPageSize());
        List<OrderDTO> results = new ArrayList<>();
        List<OrderEntity> entities=  orderRepo.findAll(pageable).getContent();
        for(int i =0;i<entities.size();i++) {
            results.add(orderConverter.toDTO(entities.get(i)));
        }
        return results;
    }

    @Override
    public OrderDTO saveOrder(OrderDTO order) {

        return saveItem(order);
    }

    @Override
    public void deleteOrder(Long id) {
        delete(id);
    }

    @Override
    public List<OrderDTO> getOrderListOfUser(Long userId) {
        List<OrderDTO> result = new ArrayList<>();
        List<OrderEntity> entities = orderRepo.getListByUserId(userId);

        for(int i =0;i<entities.size();i++) {
            result.add(orderConverter.toDTO(entities.get(i)));
        }
        return result;
    }

    @Override
    public Long getCountItems() {
        return countItems();
    }

    @Override
    public List<OrderDTO> getOrdersBySearchName(String searchName) {
        List<OrderEntity> entities = new ArrayList<>();
        if(searchName!=""){
            entities = orderRepo.getOrderByName(searchName);
        }else {
            entities = orderRepo.findAll();
        }
        List<OrderDTO>  list = new ArrayList<>();
        for(int i =0;i<entities.size();i++) {
            list.add(orderConverter.toDTO(entities.get(i)));
        }
        return list;
    }
}
