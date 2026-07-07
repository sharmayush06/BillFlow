package com.ayush.bill_flow.dto.dashboard;

import com.ayush.bill_flow.dto.bill.BillResponse;
import com.ayush.bill_flow.dto.product.ProductGetRequest;
import com.ayush.bill_flow.model.Bill;
import com.ayush.bill_flow.model.Product;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DashboardResponse {

    private BigDecimal todaySale;

    private BigDecimal monthlySale;

    private BigDecimal todayProfit;

    private BigDecimal monthlyProfit;

    private Long productsSold;

    private List<ProductGetRequest> lowStock;

    private List<Product> topSelling;

    private List<Bill> recentBill;

}
