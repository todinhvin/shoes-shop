package com.laptrinhweb.shoesshop.entity;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "product")
public class ProductEntity extends BaseEntity{
    @Column
    private String name;
    @Column
    private String thumbnail;
    @Column
    private String description;
    @Column(columnDefinition = "text")
    private String content;
    @Column
    private Double price;

    @ManyToOne
    @JoinColumn(name="product_brand")
    private BrandEntity brand;

    @ManyToOne
    @JoinColumn(name="product_color")
    private ColorEntity color;


    @ManyToOne
    @JoinColumn(name="product_width")
    private WidthEntity width;

    @OneToMany(mappedBy = "productEntity", cascade = CascadeType.ALL)
    private List<OrderEntity> productOrdered = new ArrayList<>();

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public BrandEntity getBrand() {
        return brand;
    }

    public void setBrand(BrandEntity brand) {
        this.brand = brand;
    }

    public ColorEntity getColor() {
        return color;
    }

    public void setColor(ColorEntity color) {
        this.color = color;
    }


    public WidthEntity getWidth() {
        return width;
    }

    public void setWidth(WidthEntity width) {
        this.width = width;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public List<OrderEntity> getProductOrdered() {
        return productOrdered;
    }

    public void setProductOrdered(List<OrderEntity> productOrdered) {
        this.productOrdered = productOrdered;
    }
}
