package com.ayush.bill_flow.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.ayush.bill_flow.dto.product.ProductCreateRequest;
import com.ayush.bill_flow.dto.product.ProductUpdateRequest;
import com.ayush.bill_flow.dto.product.StockUpdate;
import com.ayush.bill_flow.exception.InsufficientStockException;
import com.ayush.bill_flow.exception.ResourceNotFoundException;
import com.ayush.bill_flow.model.Product;
import com.ayush.bill_flow.repository.ProductRepository;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public ResponseEntity<?> addProduct(ProductCreateRequest request) {

        Product product = new Product();

        product.setName(request.getName());
        product.setDescription(request.getDescription());
        product.setBarcode(request.getBarcode());
        product.setBrand(request.getBrand());
        product.setCategory(request.getCategory());
        product.setImageUrl(request.getImageUrl());
        product.setPurchasingPrice(request.getPurchasingPrice());
        product.setSellingPrice(request.getSellingPrice());
        product.setQuantity(request.getQuantity());
        product.setMinQuantity(request.getMinQuantity());
        product.setUnit(request.getUnit());
        product.setShop(request.getShop());
        product.setSku("SKU-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase());

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(productRepository.save(product));
    }

    public ResponseEntity<?> getAllProduct() {
        return ResponseEntity.ok(productRepository.findAll().stream().filter(Product::getIsActive).toList());
    }

    public ResponseEntity<?> getProductById(Long id) {

        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found"));

        return ResponseEntity.ok(product);
    }

    public ResponseEntity<?> updateProductById(Long id, ProductUpdateRequest request) {

        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found"));

        product.setName(request.getName());
        product.setDescription(request.getDescription());
        product.setImageUrl(request.getImageUrl());
        product.setPurchasingPrice(request.getPurchasingPrice());
        product.setSellingPrice(request.getSellingPrice());
        product.setQuantity(request.getQuantity());
        product.setMinQuantity(request.getMinQuantity());
        product.setCategory(request.getCategory());
        product.setUnit(request.getUnit());
        product.setBrand(request.getBrand());

        return ResponseEntity.ok(productRepository.save(product));
    }

    public ResponseEntity<?> deleteOrAddProductById(Long id) {

        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found"));

        product.setIsActive(!product.getIsActive());

        productRepository.save(product);

        if(product.getIsActive())
            return ResponseEntity.ok("Product readded successfully.");
        else
            return ResponseEntity.ok("Product deleted successfully.");
    }

    public ResponseEntity<?> updateStock(Long id,
                                         StockUpdate stockUpdate) {

        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found"));

        product.setQuantity(stockUpdate.getUpdatedStock());

        return ResponseEntity.ok(productRepository.save(product));
    }

    public ResponseEntity<?> increaseStock(Long id,
                                           StockUpdate stockUpdate) {

        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found"));

        product.setQuantity(product.getQuantity() + stockUpdate.getUpdatedStock());

        return ResponseEntity.ok(productRepository.save(product));
    }

    public ResponseEntity<?> decreaseStock(Long id,
                                           StockUpdate stockUpdate) {

        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found"));

        if (product.getQuantity() < stockUpdate.getUpdatedStock()) {
            throw new InsufficientStockException("Insufficient stock");
        }

        product.setQuantity(product.getQuantity() - stockUpdate.getUpdatedStock());

        return ResponseEntity.ok(productRepository.save(product));
    }

    public ResponseEntity<?> getProductFromCategory(String category) {

        List<Product> products = productRepository.findByCategory(category).stream().filter(Product::getIsActive).toList();

        if (products.isEmpty()) {
            throw new ResourceNotFoundException("No products found");
        }

        return ResponseEntity.ok(products);
    }

    public ResponseEntity<?> searchProduct(String keyword) {

        List<Product> products = productRepository.findProductByKeyword(keyword).stream().filter(Product::getIsActive).toList();

        if (products.isEmpty()) {
            throw new ResourceNotFoundException("No products found");
        }

        return ResponseEntity.ok(products);
    }

    public ResponseEntity<?> getLowStock(Long shopId) {

        List<Product> products = productRepository.findLowStock(shopId).stream().filter(Product::getIsActive).toList();

        return ResponseEntity.ok(products);
    }

}