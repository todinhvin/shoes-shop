package com.laptrinhweb.shoesshop.dto;

public class ProductDTO extends CommonDTO<ProductDTO> {
    private Long id;
    private String name;
    private String thumbnail;
    private String description;
    private String content;
    private double price;
    private Long brand;
    private Long color;
    private Long width;

    private String brandName;
    private String colorName;
    private String widthName;

    public ProductDTO() {

    }

    @Override
    public Long getId() {
        return id;
    }

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

    public void setId(Long id) {
        this.id = id;
    }

    public Long getBrand() {
        return brand;
    }

    public void setBrand(Long brand) {
        this.brand = brand;
    }

    public Long getColor() {
        return color;
    }

    public void setColor(Long color) {
        this.color = color;
    }

    public Long getWidth() {
        return width;
    }

    public void setWidth(Long width) {
        this.width = width;
    }

    public String getBrandName() {
        return brandName;
    }

    public void setBrandName(String brandName) {
        this.brandName = brandName;
    }

    public String getColorName() {
        return colorName;
    }

    public void setColorName(String colorName) {
        this.colorName = colorName;
    }

    public String getWidthName() {
        return widthName;
    }

    public void setWidthName(String widthName) {
        this.widthName = widthName;
    }

    public ProductDTO(Long id, String name, String thumbnail, String description, String content, double price, Long brand, Long color, Long width, String brandName, String colorName,  String widthName) {
        this.id = id;
        this.name = name;
        this.thumbnail = thumbnail;
        this.description = description;
        this.content = content;
        this.price = price;
        this.brand = brand;
        this.color = color;
        this.width = width;
        this.brandName = brandName;
        this.colorName = colorName;
        this.widthName = widthName;
    }
}
