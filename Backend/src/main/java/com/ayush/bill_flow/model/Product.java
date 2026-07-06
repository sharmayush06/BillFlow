package com.ayush.bill_flow.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;

    @Column(nullable = false)
    private String name;

    @Column(unique = true)
    private String sku;

    @Column(unique = true)
    private String barcode;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false)
    private String imageUrl;

    @Column(nullable = false,precision = 10 ,scale = 2)
    private BigDecimal purchasingPrice;

    @Column(nullable = false,precision = 10,scale = 2)
    private BigDecimal sellingPrice;

    @Column(nullable = false)
    @PositiveOrZero
    private Integer quantity;

    @Column(nullable = false)
    @PositiveOrZero
    private Integer minQuantity;

    @Column(nullable = false)
    private String category;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Unit unit;

    private String brand;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;

    @Column(nullable = false)
    private Boolean isActive=true;

    @JoinColumn(name = "shop_id")
    @ManyToOne
    private Shop shop;

}
