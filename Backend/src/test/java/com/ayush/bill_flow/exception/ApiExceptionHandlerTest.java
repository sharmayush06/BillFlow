package com.ayush.bill_flow.exception;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;

class ApiExceptionHandlerTest {

    private final ApiExceptionHandler handler = new ApiExceptionHandler();

    @Test
    void handleResourceNotFoundExceptionReturnsNotFoundPayload() {
        ErrorResponse response = handler.handleResourceNotFoundException(
                new ResourceNotFoundException("Product not found")
        );

        assertEquals(HttpStatus.NOT_FOUND.value(), response.getStatus());
        assertEquals("Product not found", response.getMessage());
    }

    @Test
    void handleInsufficientStockExceptionReturnsConflictPayload() {
        ErrorResponse response = handler.handleInsufficientStockException(
                new InsufficientStockException("Product has insufficient stock")
        );

        assertEquals(HttpStatus.CONFLICT.value(), response.getStatus());
        assertEquals("Product has insufficient stock", response.getMessage());
    }
}
