package com.ayush.bill_flow.dto.bill;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BillResponse {

    private String billNumber;

    private Long shopId;

    private BigDecimal subtotal;

    private BigDecimal discount;

    private List<BillItemResponse> billItemsResponse=new ArrayList<>();

    private BigDecimal totalAmount;

    private String paymentMethod;

    private String paymentStatus;

    private LocalDateTime createdAt;

}
