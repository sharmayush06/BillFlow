package com.ayush.bill_flow.service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.ayush.bill_flow.dto.bill.BillCreateRequest;
import com.ayush.bill_flow.dto.bill.BillItemRequest;
import com.ayush.bill_flow.dto.bill.BillItemResponse;
import com.ayush.bill_flow.dto.bill.BillResponse;
import com.ayush.bill_flow.exception.InsufficientStockException;
import com.ayush.bill_flow.exception.ResourceNotFoundException;
import com.ayush.bill_flow.model.Bill;
import com.ayush.bill_flow.model.BillItem;
import com.ayush.bill_flow.model.Product;
import com.ayush.bill_flow.model.Shop;
import com.ayush.bill_flow.repository.BillItemRepository;
import com.ayush.bill_flow.repository.BillRepository;
import com.ayush.bill_flow.repository.ProductRepository;
import com.ayush.bill_flow.repository.ShopRepository;

@Service
public class BillService {

    @Autowired
    BillRepository billRepository;

    @Autowired
    BillItemRepository billItemRepository;

    @Autowired
    ShopRepository shopRepository;

    @Autowired
    ProductRepository productRepository;

    public ResponseEntity<?> addBill(BillCreateRequest billCreateRequest) {
        Shop shop = shopRepository.findById(billCreateRequest.getShopId())
                .orElseThrow(() -> new ResourceNotFoundException("Shop not found"));

        Bill bill = new Bill();

        bill.setShop(shop);
        bill.setBillNumber("INV-" + System.currentTimeMillis());
        bill.setPaymentMethod(billCreateRequest.getPaymentMethod());
        bill.setPaymentStatus("PAID");
        bill.setDiscount(
                billCreateRequest.getDiscount() == null
                        ? BigDecimal.ZERO
                        : billCreateRequest.getDiscount()
        );

        BigDecimal subtotal = BigDecimal.ZERO;

        List<BillItemResponse> billItemResponses = new ArrayList<>();
        for(BillItemRequest billItemRequest:billCreateRequest.getBillItemRequests()){
            Product product = productRepository.findById(billItemRequest.getProductId())
                    .orElseThrow(() -> new ResourceNotFoundException("Product not found"));

            if (product.getQuantity() < billItemRequest.getQuantity()) {
                throw new InsufficientStockException(product.getName() + " has insufficient stock");
            }

            BigDecimal total = product.getSellingPrice()
                    .multiply(BigDecimal.valueOf(billItemRequest.getQuantity()));

            subtotal = subtotal.add(total);

            product.setQuantity(product.getQuantity() - billItemRequest.getQuantity());
            productRepository.save(product);

            BillItem billItem = new BillItem();
            billItem.setBill(bill);
            billItem.setProduct(product);
            billItem.setQuantity(billItemRequest.getQuantity());
            billItem.setPurchasingPrice((product.getPurchasingPrice()));
            billItem.setSellingPrice(product.getSellingPrice());
            billItem.setTotalPrice(total);
            billItem.setProfit((billItem.getSellingPrice().subtract(billItem.getPurchasingPrice())).multiply(BigDecimal.valueOf(billItem.getQuantity())));

            bill.getBillItems().add(billItem);

            BillItemResponse response = new BillItemResponse();
            response.setProductId(product.getProductId());
            response.setProductName(product.getName());
            response.setQuantity(billItemRequest.getQuantity());
            response.setSellingPrice(product.getSellingPrice());
            response.setTotalPrice(total);

            billItemResponses.add(response);
        }
        bill.setSubtotal(subtotal);

        BigDecimal totalAmount = subtotal.subtract(bill.getDiscount());

        bill.setTotalAmount(totalAmount);

        Bill savedBill = billRepository.save(bill);
        BillResponse billResponse = new BillResponse();

        billResponse.setBillNumber(savedBill.getBillNumber());
        billResponse.setShopId(shop.getShopId());
        billResponse.setSubtotal(savedBill.getSubtotal());
        billResponse.setDiscount(savedBill.getDiscount());
        billResponse.setTotalAmount(savedBill.getTotalAmount());
        billResponse.setPaymentMethod(savedBill.getPaymentMethod());
        billResponse.setPaymentStatus(savedBill.getPaymentStatus());
        billResponse.setBillItemsResponse(billItemResponses);

        return ResponseEntity.ok(billResponse);

    }

    public ResponseEntity<?> getAllBills() {

        return ResponseEntity.ok(billRepository.findAll().stream().filter(Bill::getIsActive).toList());

    }

    public ResponseEntity<?> getBillById(Long id) {
        Bill bill = billRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Bill not found"));
        if(bill.getIsActive()==false){
            return ResponseEntity.ok("Bill is deleted");
        }
        return ResponseEntity.ok(bill);
    }

    public ResponseEntity<?> getAllBillsOfShop(Long shopId) {
        Shop shop =shopRepository.findById(shopId).orElseThrow(()->new ResourceNotFoundException("Shop not found"));
        return ResponseEntity.ok(billRepository.findByShopShopId(shop.getShopId()).stream().filter(Bill::getIsActive).toList());
    }

    public ResponseEntity<?> deleteBill(Long id) {
        Bill bill = billRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Bill not found"));
        bill.setIsActive(false);
        return ResponseEntity.ok("Bill deleted successfully");
    }

    public ResponseEntity<?> getAllRecentBills() {
        return ResponseEntity.ok(billRepository.findRecentBills());
    }

    public ResponseEntity<?> getAllRecentBillsOfShop(Long shopId) {
        return ResponseEntity.ok(billRepository.findRecentBillsOfShop(shopId));
    }
}
