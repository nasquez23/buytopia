package org.buytopia.services.impl;

import org.buytopia.exceptions.NotFoundException;
import org.buytopia.models.Cart;
import org.buytopia.repositories.CartRepository;
import org.buytopia.services.CartService;
import org.springframework.stereotype.Service;

@Service
public class CartServiceImpl implements CartService {
    private final CartRepository cartRepository;

    public CartServiceImpl(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    @Override
    public Cart findCartById(Long id) {
        return cartRepository.findById(id).orElseThrow(() -> new NotFoundException("Could not find this cart."));
    }

    @Override
    public Cart updateCart(Long id, Cart cart) {
        Cart cartToUpdate = cartRepository.findById(id).orElseThrow(() -> new NotFoundException("Could not find this cart."));
        cartToUpdate.setCartItems(cart.getCartItems());
        return cartRepository.save(cartToUpdate);
    }
}
