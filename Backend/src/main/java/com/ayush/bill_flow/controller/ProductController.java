package com.ayush.bill_flow.controller;

import com.ayush.bill_flow.dto.product.ProductCreateRequest;
import com.ayush.bill_flow.dto.product.ProductUpdateRequest;
import com.ayush.bill_flow.dto.product.StockUpdate;
import com.ayush.bill_flow.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    ProductService productService;

    @PostMapping
    public ResponseEntity<?> addProduct(@RequestBody ProductCreateRequest productCreateRequest){
        return productService.addProduct(productCreateRequest);
    }

    @GetMapping
    public ResponseEntity<List<?>> getAllProduct(){
        return (ResponseEntity<List<?>>) productService.getAllProduct();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getProductById(@PathVariable Long id){
        return productService.getProductById(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateProductById(@PathVariable Long id , @RequestBody ProductUpdateRequest productUpdateRequest){
        return productService.updateProductById(id,productUpdateRequest);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProductById(@PathVariable Long id){
        return productService.deleteProductById(id);
    }

    @PutMapping("/{id}/stock")
    public ResponseEntity<?> updateStock(@PathVariable Long id , @RequestBody StockUpdate stockUpdate){
        return productService.updateStock(id,stockUpdate);
    }

    @PutMapping("/{id}/increase-stock")
    public ResponseEntity<?> increaseStock(@PathVariable Long id,@RequestBody StockUpdate stockUpdate){
        return productService.increaseStock(id,stockUpdate);
    }

    @PutMapping("/{id}/decrease-stock")
    public ResponseEntity<?> decreaseStock(@PathVariable Long id,@RequestBody StockUpdate stockUpdate){
        return productService.decreaseStock(id,stockUpdate);
    }

    @PostMapping("/category/{category}")
    public ResponseEntity<?> getProductFromCategory(@PathVariable String category){
        return productService.getProductFromCategory(category);
    }

    @GetMapping("/search")
    public ResponseEntity<?> searchProduct(@RequestParam String keyword){
        return productService.searchProduct(keyword);
    }

    @GetMapping("/low-stock")
    public ResponseEntity<?> getLowStock(){
        return productService.getLowStock();
    }

}
