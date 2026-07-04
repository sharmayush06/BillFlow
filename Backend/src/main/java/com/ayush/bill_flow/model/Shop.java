package com.ayush.bill_flow.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Shop {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long shopId;

    @Column(nullable = false)
    private String shopName;

    @ManyToOne
    @JoinColumn(name = "userId")
    private Long userId;

    @Column(nullable = false)
    private String gstNumber;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private String city;

    @Column(nullable = false)
    private String state;

    @Column(nullable = false)
    private String country;

    @Column(nullable = false)
    private String pincode;

    @Column(nullable = false)
    private String logoUrl;

    @Column(nullable = false)
    private String currency;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;

    @Column(nullable = false)
    private Boolean isActive=true;

    @OneToMany(mappedBy = "shop")
    private List<Product> products;

}
