package com.laptrinhweb.shoesshop.services;

import com.laptrinhweb.shoesshop.dto.OrderDTO;
import com.laptrinhweb.shoesshop.dto.ProductPage;

import java.util.List;

public interface IOrderService {
    List<OrderDTO> getOrderList(ProductPage orderPage);
    OrderDTO saveOrder(OrderDTO order);
    void deleteOrder(Long id);
    List<OrderDTO> getOrderListOfUser(Long userId);
    Long getCountItems();
    List<OrderDTO> getOrdersBySearchName(String searchName);
}
