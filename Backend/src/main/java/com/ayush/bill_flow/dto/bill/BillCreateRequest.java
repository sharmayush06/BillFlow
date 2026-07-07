package com.ayush.bill_flow.dto.bill;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class BillCreateRequest {

    private Long shopId;

    private BigDecimal discount;

    private List<BillItemRequest> billItemRequests;

    private String paymentMethod;

    private String paymentStatus;

}
