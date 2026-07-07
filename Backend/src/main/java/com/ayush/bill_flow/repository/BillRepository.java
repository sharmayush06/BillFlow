package com.ayush.bill_flow.repository;

import com.ayush.bill_flow.model.Bill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Arrays;
import java.util.List;

@Repository
public interface BillRepository extends JpaRepository<Bill,Long> {
    List<Bill> findByShopShopId(Long shopId);
    @Query("""
            SELECT b
            FROM Bill b
            WHERE b.isActive = true
            ORDER BY b.createdAt DESC
            """)
    List<Bill> findRecentBills();

    @Query("""
            SELECT b
            FROM Bill b
            WHERE b.isActive = true AND b.shop.shopId=:id
            ORDER BY b.createdAt DESC
            """)
    List<Bill> findRecentBillsOfShop(Long id);
}
