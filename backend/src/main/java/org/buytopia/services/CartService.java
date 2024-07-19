package org.buytopia.services;

import org.buytopia.models.Cart;

public interface CartService {
    Cart findCartById(Long id);

    Cart updateCart(Long id, Cart cart);
}
