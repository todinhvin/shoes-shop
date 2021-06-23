package com.laptrinhweb.shoesshop.entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "width")
public class WidthEntity extends FilterEntity {
    @OneToMany(mappedBy = "width", cascade = CascadeType.ALL)
    private List<ProductEntity> productWidth = new ArrayList<>();

    public List<ProductEntity> getProductWidth() {
        return productWidth;
    }

    public void setProductWidth(List<ProductEntity> productWidth) {
        this.productWidth = productWidth;
    }
}
