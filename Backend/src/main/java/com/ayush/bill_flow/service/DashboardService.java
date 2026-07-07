package com.ayush.bill_flow.service;

import com.ayush.bill_flow.dto.dashboard.DashboardResponse;
import com.ayush.bill_flow.dto.dashboard.DateRangeRequest;
import com.ayush.bill_flow.dto.product.ProductGetRequest;
import com.ayush.bill_flow.model.Product;
import com.ayush.bill_flow.repository.BillItemRepository;
import com.ayush.bill_flow.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class DashboardService {

    @Autowired
    BillItemRepository billItemRepository;

    @Autowired
    ProductRepository productRepository;

    private ProductGetRequest mapToProductResponse(Product product) {
        return new ProductGetRequest(
                product.getProductId(),
                product.getName(),
                product.getDescription(),
                product.getImageUrl(),
                product.getSellingPrice(),
                product.getQuantity(),
                product.getCategory(),
                product.getUnit(),
                product.getBrand(),
                product.getIsActive(),
                product.getShop().getShopId()
        );
    }

    public ResponseEntity<?> getDashboard(Long shopId) {

        DashboardResponse dashboardResponse = new DashboardResponse();
        LocalDateTime now = LocalDateTime.now();

        dashboardResponse.setTodaySale(
                billItemRepository.getSaleBetween(
                        now.toLocalDate().atStartOfDay(),
                        now,
                        shopId
                )
        );

        dashboardResponse.setTodayProfit(
                billItemRepository.getProfitBetween(
                        now.toLocalDate().atStartOfDay(),
                        now,
                        shopId
                )
        );

        dashboardResponse.setMonthlySale(
                billItemRepository.getSaleBetween(
                        now.minusMonths(1),
                        now,
                        shopId
                )
        );

        dashboardResponse.setMonthlyProfit(
                billItemRepository.getProfitBetween(
                        now.minusMonths(1),
                        now,
                        shopId
                )
        );

        dashboardResponse.setLowStock(
                productRepository.findLowStock(shopId)
                        .stream()
                        .map(this::mapToProductResponse)
                        .toList()
        );

        dashboardResponse.setProductsSold(
                billItemRepository.getTotalProductsSold(
                        now.toLocalDate().atStartOfDay(),
                        now,
                        shopId
                )
        );

        dashboardResponse.setTopSelling(
                billItemRepository.getTopSellingProducts(shopId)
        );

        dashboardResponse.setRecentBill(
                billItemRepository.findRecentBillItems(shopId)
        );

        return ResponseEntity.ok(dashboardResponse);
    }

    public ResponseEntity<?> getProfitInRange(DateRangeRequest dateRangeRequest) {
        return ResponseEntity.ok(billItemRepository.getProfitBetween(dateRangeRequest.getStarts(),dateRangeRequest.getEnds(),dateRangeRequest.getShopId()));
    }

    public ResponseEntity<?> getItemSoldInRange(DateRangeRequest dateRangeRequest) {
        return ResponseEntity.ok(billItemRepository.getTotalProductsSold(dateRangeRequest.getStarts(),dateRangeRequest.getEnds(),dateRangeRequest.getShopId()));
    }
}
