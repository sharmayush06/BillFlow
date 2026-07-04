package com.ayush.bill_flow.dto.product;

import com.ayush.bill_flow.model.Shop;
import com.ayush.bill_flow.model.Unit;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ProductCreateRequest {
    private String name;

    private String sku;

    private String barcode;

    private String description;

    private String imageUrl;

    private BigDecimal purchasingPrice;

    private BigDecimal sellingPrice;

    private Integer quantity;

    private Integer minQuantity;

    private String category;

    private Unit unit;

    private String brand;

    private Shop shop;

}
