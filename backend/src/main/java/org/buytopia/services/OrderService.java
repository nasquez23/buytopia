package org.buytopia.services;

import java.util.List;

import org.buytopia.models.Order;

public interface OrderService {
    List<Order> getAllOrders();

    Order findOrderById(Long id);

    Order createOrder(Order order);

    Order updateOrder(Long id, Order order);

    void deleteOrder(Long id);
}
