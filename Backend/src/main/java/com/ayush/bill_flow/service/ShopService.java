package com.ayush.bill_flow.service;

import com.ayush.bill_flow.dto.shop.ShopCreateRequest;
import com.ayush.bill_flow.dto.shop.ShopUpdateRequest;
import com.ayush.bill_flow.model.Shop;
import com.ayush.bill_flow.repository.ShopRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class ShopService {

    @Autowired
    ShopRepository shopRepository;

    public ResponseEntity<?> addShop(ShopCreateRequest shopCreateRequest) {
        Shop shop = new Shop();
        shop.setShopName(shopCreateRequest.getShopName());
        shop.setAddress(shopCreateRequest.getAddress());
        shop.setCity(shopCreateRequest.getCity());
        shop.setCountry(shopCreateRequest.getCountry());
        shop.setState(shopCreateRequest.getState());
        shop.setGstNumber(shopCreateRequest.getGstNumber());
        shop.setUserId(shopCreateRequest.getUserId());
        shop.setPincode(shopCreateRequest.getPincode());
        shop.setCurrency(shopCreateRequest.getCurrency());
        shop.setLogoUrl(shopCreateRequest.getLogoUrl());

        return ResponseEntity.status(HttpStatus.CREATED).body(shopRepository.save(shop));
    }

    public ResponseEntity<?> getAllShop() {
        return ResponseEntity.ok(shopRepository.findAll().stream().filter(Shop::getIsActive).toList());
    }

    public ResponseEntity<?> getShopById(Long id) {
        return ResponseEntity.ok(shopRepository.findById(id).orElseThrow(()->new RuntimeException("Shop not found")));
    }

    public ResponseEntity<?> deleteShopById(Long id) {
        Shop shop = shopRepository.findById(id).orElseThrow(()->new RuntimeException("Shop not found"));
        shop.setIsActive(!shop.getIsActive());
        shopRepository.save(shop);
        if(shop.getIsActive())
            return ResponseEntity.ok("Product readded successfully.");
        else
            return ResponseEntity.ok("Product deleted successfully.");
    }

    public ResponseEntity<?> updateShopById(Long id, ShopUpdateRequest shopUpdateRequest) {
        Shop shop = shopRepository.findById(id).orElseThrow(()->new RuntimeException("Shop not found"));
        shop.setShopName(shopUpdateRequest.getShopName());
        shop.setAddress(shopUpdateRequest.getAddress());
        shop.setCity(shopUpdateRequest.getCity());
        shop.setCountry(shopUpdateRequest.getCountry());
        shop.setState(shopUpdateRequest.getState());
        shop.setPincode(shopUpdateRequest.getPincode());
        shop.setCurrency(shopUpdateRequest.getCurrency());
        shop.setLogoUrl(shopUpdateRequest.getLogoUrl());

        return ResponseEntity.status(HttpStatus.CREATED).body(shopRepository.save(shop));
    }
}
