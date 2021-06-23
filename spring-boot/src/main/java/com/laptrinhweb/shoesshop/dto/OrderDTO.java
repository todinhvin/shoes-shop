package com.laptrinhweb.shoesshop.dto;

public class OrderDTO extends CommonDTO<OrderDTO> {
    private Long id;
    private ProductDTO productDTO;
    private Long user_id;
    private Integer quantity;
    private String fullName;
    private String phone;
    private String note;
    private String address;
    private String size;

    public OrderDTO() {
    }

    public OrderDTO(Long id, ProductDTO productDTO, Long user_id, Integer quantity, String fullName, String phone, String note, String address, String size) {
        this.id = id;
        this.productDTO = productDTO;
        this.user_id = user_id;
        this.quantity = quantity;
        this.fullName = fullName;
        this.phone = phone;
        this.note = note;
        this.address = address;
        this.size = size;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ProductDTO getProductDTO() {
        return productDTO;
    }

    public void setProductDTO(ProductDTO productDTO) {
        this.productDTO = productDTO;
    }

    public Long getUser_id() {
        return user_id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }
}
