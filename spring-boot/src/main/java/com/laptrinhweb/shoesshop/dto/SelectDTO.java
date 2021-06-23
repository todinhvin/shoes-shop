package com.laptrinhweb.shoesshop.dto;

public class SelectDTO {
    private String size;
    private String width;
    private String color;
    private String brand;
    private String limit;
    private String page;

    public SelectDTO(String size, String width, String color, String brand, String limit, String page) {
        this.size = size;
        this.width = width;
        this.color = color;
        this.brand = brand;
        this.limit = limit;
        this.page = page;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getWidth() {
        return width;
    }

    public void setWidth(String width) {
        this.width = width;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getLimit() {
        return limit;
    }

    public void setLimit(String limit) {
        this.limit = limit;
    }

    public String getPage() {
        return page;
    }

    public void setPage(String page) {
        this.page = page;
    }
}
