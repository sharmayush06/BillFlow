package com.ayush.bill_flow.dto.bill;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class BillItemRequest {

    private Long productId;

    private Integer quantity;

}
