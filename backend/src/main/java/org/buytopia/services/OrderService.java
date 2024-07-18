package org.buytopia.services;

import org.buytopia.models.Order;

import java.util.Optional;

public interface OrderService {
    Order findOrderById(Long id);

    Order createOrder(Order order);

    Order updateOrder(Order order);

    void deleteOrder(Long id);
}
