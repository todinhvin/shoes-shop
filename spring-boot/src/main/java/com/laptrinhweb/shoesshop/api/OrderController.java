package com.laptrinhweb.shoesshop.api;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.laptrinhweb.shoesshop.dto.OrderDTO;
import com.laptrinhweb.shoesshop.dto.ProductDTO;
import com.laptrinhweb.shoesshop.dto.ProductPage;
import com.laptrinhweb.shoesshop.services.impl.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/orders")
@CrossOrigin(origins = "*", maxAge = 3600)
public class OrderController {

    private OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public List<OrderDTO> getListOrder (@RequestParam(name = "pagination") String orderPage) {
        orderPage = "{"+orderPage+"}";
        ObjectMapper mapper = new ObjectMapper();
        ProductPage orderPage1 = null;
        try {
            orderPage1 = mapper.readValue( orderPage, ProductPage.class);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        return orderService.getOrderList(orderPage1);
    }

    @GetMapping(path = "/countItems")
    @PreAuthorize("hasRole('ADMIN')")
    public Long getCountList() {
        return orderService.getCountItems();
    }

    @GetMapping(path = "/my-order")
    @PreAuthorize("hasAnyRole('USER','ADMIN')")
    public List<OrderDTO> getListOrderOfUser(Long userId) {
        return orderService.getOrderListOfUser(userId);
    }


    @PostMapping
    @PreAuthorize("hasRole('USER')")
    public OrderDTO saveOrder(@RequestBody OrderDTO order ) {
        return orderService.saveOrder(order);
    }


    @GetMapping(path = "/search")
    public List<OrderDTO> getProductsSearched(@RequestParam(value = "search") String searchValue) {
        return orderService.getOrdersBySearchName(searchValue);
    }

    @DeleteMapping
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteOrder(@RequestParam("id")Long id) {
        orderService.deleteOrder(id);
    }
}
