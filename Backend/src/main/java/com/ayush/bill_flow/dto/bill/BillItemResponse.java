package com.ayush.bill_flow.dto.bill;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BillItemResponse {

    private Long productId;

    private String productName;

    private Integer quantity;

    private BigDecimal sellingPrice;

    private BigDecimal totalPrice;

}
