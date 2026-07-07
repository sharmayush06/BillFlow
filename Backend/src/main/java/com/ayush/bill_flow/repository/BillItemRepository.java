package com.ayush.bill_flow.repository;

import com.ayush.bill_flow.model.Bill;
import com.ayush.bill_flow.model.BillItem;
import com.ayush.bill_flow.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

public interface BillItemRepository extends JpaRepository<BillItem, Long> {

    List<BillItem> findByBillBillId(Long billId);

    List<BillItem> findByProductProductId(Long productId);

    @Query("""
            SELECT COALESCE(SUM(bi.profit),0)
            FROM BillItem bi
            WHERE bi.bill.shop.shopId = :shopId
              AND bi.bill.createdAt >= :start
              AND bi.bill.createdAt < :end
              AND bi.bill.isActive = true
            """)
    BigDecimal getProfitBetween(
            @Param("start") LocalDateTime start,
            @Param("end") LocalDateTime end,
            @Param("shopId") Long shopId);

    @Query("""
            SELECT COALESCE(SUM(bi.totalPrice),0)
            FROM BillItem bi
            WHERE bi.bill.shop.shopId = :shopId
              AND bi.bill.createdAt >= :start
              AND bi.bill.createdAt < :end
              AND bi.bill.isActive = true
            """)
    BigDecimal getSaleBetween(
            @Param("start") LocalDateTime start,
            @Param("end") LocalDateTime end,
            @Param("shopId") Long shopId);

    @Query("""
            SELECT bi.product.productId,
                   SUM(bi.quantity)
            FROM BillItem bi
            WHERE bi.bill.isActive = true
              AND bi.bill.shop.shopId = :shopId
            GROUP BY bi.product.productId
            ORDER BY SUM(bi.quantity) DESC
            """)
    List<Product> getTopSellingProducts(@Param("shopId") Long shopId);

    @Query("""
            SELECT COALESCE(SUM(bi.quantity),0)
            FROM BillItem bi
            WHERE bi.bill.createdAt >= :start
              AND bi.bill.createdAt < :end
              AND bi.bill.isActive = true
              AND bi.bill.shop.shopId = :shopId
            """)
    Long getTotalProductsSold(
            @Param("start") LocalDateTime start,
            @Param("end") LocalDateTime end,
            @Param("shopId") Long shopId);

    @Query(value = """
    SELECT bi.*
    FROM bill_item bi
    JOIN bill b ON bi.bill_id = b.bill_id
    WHERE b.shop_id = :shopId
    ORDER BY b.created_at DESC
    LIMIT 10
    """, nativeQuery = true)
    List<Bill> findRecentBillItems(@Param("shopId") Long shopId);
    }

