package com.ayush.bill_flow.dto.product;

import com.ayush.bill_flow.model.Shop;
import com.ayush.bill_flow.model.Unit;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductGetRequest {

    private Long productId;

    private String name;

    private String description;

    private String imageUrl;

    private BigDecimal sellingPrice;

    private Integer quantity;

    private String category;

    private Unit unit;

    private String brand;

    private Boolean isActive;

    private Long shopId;
}
