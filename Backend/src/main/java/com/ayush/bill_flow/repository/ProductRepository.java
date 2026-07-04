package com.ayush.bill_flow.repository;

import com.ayush.bill_flow.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByCategory(String category);

    List<Product> findByNameContainingIgnoreCase(String keyword);

    @Query("""
            SELECT p
            FROM Product p
            WHERE LOWER(p.name) LIKE LOWER(CONCAT('%', :keyword, '%'))
               OR LOWER(p.brand) LIKE LOWER(CONCAT('%', :keyword, '%'))
               OR LOWER(p.sku) LIKE LOWER(CONCAT('%', :keyword, '%'))
               OR LOWER(p.barcode) LIKE LOWER(CONCAT('%', :keyword, '%'))
            """)
    List<Product> findProductByKeyword(String keyword);

    @Query("""
            SELECT p
            FROM Product p
            WHERE p.quantity <= p.minQuantity
              AND p.isActive = true
            """)
    List<Product> findLowStock();

}