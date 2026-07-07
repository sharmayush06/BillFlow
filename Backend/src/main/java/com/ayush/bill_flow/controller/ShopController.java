package com.ayush.bill_flow.controller;

import com.ayush.bill_flow.dto.shop.ShopCreateRequest;
import com.ayush.bill_flow.dto.shop.ShopUpdateRequest;
import com.ayush.bill_flow.service.ShopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/shops")
public class ShopController {

    @Autowired
    ShopService shopService;

    @PostMapping
    public ResponseEntity<?> addShop(@RequestBody ShopCreateRequest shopCreateRequest){
        return shopService.addShop(shopCreateRequest);
    }

    @GetMapping
    public ResponseEntity<?> getAllShop(){
        return shopService.getAllShop();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getShopById(@PathVariable Long id){
        return shopService.getShopById(id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteShopById(@PathVariable Long id){
        return shopService.deleteShopById(id);
    }

    @PutMapping("/{id}")
    public  ResponseEntity<?> updateShopById(@PathVariable Long id, @RequestBody ShopUpdateRequest shopUpdateRequest){
        return shopService.updateShopById(id,shopUpdateRequest);
    }

}
