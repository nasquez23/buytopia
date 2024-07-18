package org.buytopia.services;

import org.buytopia.models.Cart;

import java.util.Optional;

public interface CartService {
    Cart findCartById(Long id);

    Cart updateCart(Cart cart);
}
