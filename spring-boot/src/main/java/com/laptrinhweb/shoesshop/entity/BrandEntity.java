package com.laptrinhweb.shoesshop.entity;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "brand")
public class BrandEntity extends FilterEntity{
    @OneToMany(mappedBy = "brand", cascade = CascadeType.ALL)
    private List<ProductEntity> productsBrand = new ArrayList<>();

    public List<ProductEntity> getProductsBrand() {
        return productsBrand;
    }

    public void setProductsBrand(List<ProductEntity> productsBrand) {
        this.productsBrand = productsBrand;
    }
}
