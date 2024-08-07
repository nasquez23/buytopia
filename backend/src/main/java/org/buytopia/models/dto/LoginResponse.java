package org.buytopia.models.dto;

import lombok.Data;

@Data
public class LoginResponse {
    private String token;
    private long expiration;
}
