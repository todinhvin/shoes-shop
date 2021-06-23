package com.laptrinhweb.shoesshop.converter;

import com.laptrinhweb.shoesshop.dto.OrderDTO;
import com.laptrinhweb.shoesshop.entity.OrderEntity;
import com.laptrinhweb.shoesshop.entity.ProductEntity;
import com.laptrinhweb.shoesshop.repositories.ProductRepo;
import com.laptrinhweb.shoesshop.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class OrderConverter extends  CommonConverter<OrderDTO, OrderEntity> {
    private ProductRepo productRepo;
    private ProductConverter productConverter;
    private UserRepository userRepository;

    @Autowired
    public OrderConverter(ProductRepo productRepo,ProductConverter productConverter,UserRepository userRepository) {
        this.productRepo=productRepo;
        this.productConverter = productConverter;
        this.userRepository = userRepository;
    }

    @Override
    public OrderDTO toDTO(OrderEntity entity) {
        OrderDTO dto = new OrderDTO();
        ProductEntity productEntity = productRepo.findOneById(entity.getProductEntity().getId());
        dto.setProductDTO(productConverter.toDTO(productEntity));
        dto.setUser_id(entity.getUser().getId());
        dto.setFullName(entity.getCustomerName());
        dto.setQuantity(entity.getQuantity());
        dto.setPhone(entity.getPhone());
        dto.setNote(entity.getNote());
        dto.setId(entity.getId());
        dto.setAddress(entity.getAddress());
        dto.setSize(entity.getSize());
        return dto;
    }

    @Override
    public OrderEntity toEntity( OrderDTO dto) {
        OrderEntity entity = new OrderEntity();
        entity.setCustomerName(dto.getFullName());
        entity.setQuantity(dto.getQuantity());
        entity.setAddress(dto.getAddress());
        entity.setPhone(dto.getPhone());
        entity.setNote(dto.getNote());
        entity.setSize(dto.getSize());
        entity.setUser(userRepository.findOneById(dto.getUser_id()));
        entity.setProductEntity(productRepo.findOneById(dto.getProductDTO().getId()));
        return entity;
    }

    @Override
    public OrderEntity toEntity( OrderDTO dto,OrderEntity oldEntity) {
        oldEntity.setCustomerName(dto.getFullName());
        oldEntity.setQuantity(dto.getQuantity());
        oldEntity.setAddress(dto.getAddress());
        oldEntity.setPhone(dto.getPhone());
        oldEntity.setNote(dto.getNote());
        oldEntity.setSize(dto.getSize());
        oldEntity.setUser(userRepository.findOneById(dto.getUser_id()));
        oldEntity.setProductEntity(productRepo.findOneById(dto.getProductDTO().getId()));
        return oldEntity;
    }
}
