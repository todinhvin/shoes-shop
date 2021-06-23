package com.laptrinhweb.shoesshop.entity;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="color")
public class ColorEntity extends FilterEntity {
    @OneToMany(mappedBy = "color", cascade = CascadeType.ALL)
    private List<ProductEntity> productColor = new ArrayList<>();

    public List<ProductEntity> getProductColor() {
        return productColor;
    }

    public void setProductColor(List<ProductEntity> productColor) {
        this.productColor = productColor;
    }
}
