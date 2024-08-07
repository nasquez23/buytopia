package org.buytopia.controllers;

import org.buytopia.models.User;
import org.buytopia.models.dto.LoginRequest;
import org.buytopia.models.dto.LoginResponse;
import org.buytopia.models.dto.RegisterRequest;
import org.buytopia.services.AuthenticationService;
import org.buytopia.services.JwtService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {
    private final AuthenticationService authenticationService;
    private final JwtService jwtService;

    public AuthenticationController(AuthenticationService authenticationService, JwtService jwtService) {
        this.authenticationService = authenticationService;
        this.jwtService = jwtService;
    }

    @PostMapping("/register")
    public ResponseEntity<User> signUp(@RequestBody RegisterRequest registerRequest) {
        User user = authenticationService.signUp(registerRequest);

        return ResponseEntity.ok(user);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> signIn(@RequestBody LoginRequest loginRequest) {
        User authenticatedUser = authenticationService.signIn(loginRequest);

        String token = jwtService.generateToken(authenticatedUser);
        LoginResponse response = new LoginResponse();
        response.setToken(token);
        response.setExpiration(jwtService.getExpirationTime());

        return ResponseEntity.ok(response);
    }
}
