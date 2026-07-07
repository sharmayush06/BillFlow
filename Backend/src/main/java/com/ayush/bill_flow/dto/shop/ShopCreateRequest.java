package com.ayush.bill_flow.dto.shop;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ShopCreateRequest {

    private String shopName;

    private String gstNumber;

    private String address;

    private String city;

    private String state;

    private String country;

    private String pincode;

    private String logoUrl;

    private String currency;

}
