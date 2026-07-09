package com.ayush.bill_flow.service;

import com.ayush.bill_flow.dto.auth.AuthResponse;
import com.ayush.bill_flow.dto.auth.LoginRequest;
import com.ayush.bill_flow.dto.auth.RegisterRequest;
import com.ayush.bill_flow.model.Role;
import com.ayush.bill_flow.model.User;
import com.ayush.bill_flow.repository.UserRepository;
import com.ayush.bill_flow.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository repository;

    private final PasswordEncoder passwordEncoder;

    private final JwtService jwtService;

    private final AuthenticationManager authenticationManager;

    public AuthResponse register(RegisterRequest request) {
        return register(request, Role.OWNER);
    }

    public AuthResponse register(RegisterRequest request, Role defaultRole) {

        User user = new User();

        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());

        user.setUsername(request.getUsername());

        user.setEmail(request.getEmail());

        user.setPhoneNumber(request.getPhoneNumber());

        user.setPassword(passwordEncoder.encode(request.getPassword()));

        if (request.getRole() != null && !request.getRole().isBlank()) {
            try {
                user.setRole(Role.valueOf(request.getRole().trim().toUpperCase()));
            } catch (IllegalArgumentException ex) {
                user.setRole(defaultRole);
            }
        } else {
            user.setRole(defaultRole);
        }

        repository.save(user);

        String token = jwtService.generateToken(user);

        return new AuthResponse(token);
    }

    public AuthResponse login(LoginRequest request) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );

        User user = repository.findByUsername(request.getUsername())
                .orElseThrow();

        String token = jwtService.generateToken(user);

        return new AuthResponse(token);
    }

}