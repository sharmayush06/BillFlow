package com.ayush.bill_flow.controller;

import com.ayush.bill_flow.dto.auth.*;
import com.ayush.bill_flow.model.Role;
import com.ayush.bill_flow.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public AuthResponse register(
            @RequestBody RegisterRequest request){

        return authService.register(request);
    }

    @PostMapping("/login")
    public AuthResponse login(
            @RequestBody LoginRequest request){

        return authService.login(request);
    }

    @PostMapping("/register-employee")
    public AuthResponse registerEmployee(@RequestBody RegisterRequest request) {
        return authService.register(request, Role.EMPLOYEE);
    }

}