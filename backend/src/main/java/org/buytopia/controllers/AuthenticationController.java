package org.buytopia.controllers;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.buytopia.models.User;
import org.buytopia.models.dto.LoginRequest;
import org.buytopia.models.dto.RegisterRequest;
import org.buytopia.services.AuthenticationService;
import org.buytopia.services.JwtService;
import org.buytopia.utils.CookieUtils;
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
    public ResponseEntity<Void> signIn(@RequestBody LoginRequest loginRequest, HttpServletResponse response) {
        User authenticatedUser = authenticationService.signIn(loginRequest);

        String token = jwtService.generateToken(authenticatedUser);
        
        CookieUtils.clearCookie("token", response);

        Cookie cookie = new Cookie("token", token);
        cookie.setHttpOnly(true);
        cookie.setSecure(true);
        cookie.setPath("/");
        cookie.setMaxAge((int) jwtService.getExpirationTime());
        response.addCookie(cookie);

        return ResponseEntity.ok().build();
    }
}
