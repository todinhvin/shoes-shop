package com.laptrinhweb.shoesshop.converter;

import com.laptrinhweb.shoesshop.dto.ProductDTO;
import com.laptrinhweb.shoesshop.entity.ProductEntity;
import com.laptrinhweb.shoesshop.repositories.BrandRepo;
import com.laptrinhweb.shoesshop.repositories.ColorRepo;
import com.laptrinhweb.shoesshop.repositories.SizeRepo;
import com.laptrinhweb.shoesshop.repositories.WidthRepo;
import com.laptrinhweb.shoesshop.services.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

@Component
public class ProductConverter extends CommonConverter<ProductDTO,ProductEntity> {
    private final ColorRepo colorRepo;
    private final BrandRepo brandRepo;
    private final SizeRepo sizeRepo;
    private final WidthRepo widthRepo;
    private final IProductService productService;

    @Autowired
    public ProductConverter(ColorRepo colorRepo, BrandRepo brandRepo,SizeRepo sizeRepo,WidthRepo widthRepo,@Lazy IProductService productService) {
        this.colorRepo = colorRepo;
        this.brandRepo = brandRepo;
        this.sizeRepo = sizeRepo;
        this.productService =productService;
        this.widthRepo = widthRepo;
    }

    public ProductDTO toDTO(ProductEntity entity) {
        return new ProductDTO(entity.getId(),entity.getName(),entity.getThumbnail(), entity.getDescription(),
                entity.getContent(), entity.getPrice(),entity.getBrand().getId(),entity.getColor().getId(),entity.getWidth().getId(),
                entity.getBrand().getName(),entity.getColor().getName(),entity.getWidth().getName());
    }
    public ProductEntity toEntity(ProductDTO dto) {
        ProductEntity entity = new ProductEntity();
        entity.setName(dto.getName());
        entity.setThumbnail(dto.getThumbnail());
        entity.setDescription(dto.getDescription());
        entity.setContent(dto.getContent());
        entity.setPrice(dto.getPrice());
        entity.setBrand(brandRepo.findOneById(dto.getBrand()));
        entity.setColor((colorRepo.findOneById(dto.getColor())));
        entity.setWidth(widthRepo.findOneById(dto.getWidth()));
        return entity;
    }
    public ProductEntity toEntity(ProductDTO dto, ProductEntity oldEntity) {
        oldEntity.setName(dto.getName());
        oldEntity.setThumbnail(dto.getThumbnail());
        oldEntity.setDescription(dto.getDescription());
        oldEntity.setContent(dto.getContent());
        oldEntity.setPrice(dto.getPrice());
        oldEntity.setBrand(brandRepo.findOneById(dto.getBrand()));
        oldEntity.setColor((colorRepo.findOneById(dto.getColor())));
        oldEntity.setWidth(widthRepo.findOneById(dto.getWidth()));
        return oldEntity;
    }
}
