package com.ayush.bill_flow.controller;

import com.ayush.bill_flow.dto.bill.BillCreateRequest;
import com.ayush.bill_flow.service.BillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bills")
public class BillController {

    @Autowired
    BillService billService;

    @PostMapping
    public ResponseEntity<?> addBill(@RequestBody BillCreateRequest billCreateRequest){
        return billService.addBill(billCreateRequest);
    }

    @GetMapping
    public ResponseEntity<?> getAllBills(){
        return billService.getAllBills();
    }

    @GetMapping("/recent")
    public ResponseEntity<?> getAllRecentBills(){
        return billService.getAllRecentBills();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getBillById(@PathVariable Long id){
        return billService.getBillById(id);
    }

    @GetMapping("/shop/{shopId}")
    public ResponseEntity<?> getAllBillsOfShop(@PathVariable Long shopId){
        return billService.getAllBillsOfShop(shopId);
    }

    @GetMapping("/recent/shop/{shopId}")
    public ResponseEntity<?> getAllRecentBillsOfShop(@PathVariable Long shopId){
        return billService.getAllRecentBillsOfShop(shopId);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> deleteBill(@PathVariable Long id){
        return billService.deleteBill(id);
    }
}
