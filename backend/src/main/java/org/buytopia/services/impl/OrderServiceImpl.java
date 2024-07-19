package org.buytopia.services.impl;

import java.util.List;

import org.buytopia.exceptions.NotFoundException;
import org.buytopia.models.Order;
import org.buytopia.repositories.OrderRepository;
import org.buytopia.services.OrderService;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;

    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public Order findOrderById(Long id) {
        return orderRepository.findById(id).orElseThrow(() -> new NotFoundException("Could not find this order."));
    }

    @Override
    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }

    @Override
    public Order updateOrder(Long id, Order order) {
        Order orderToUpdate = orderRepository.findById(id).orElseThrow(() -> new NotFoundException("Could not find this order."));
        orderToUpdate.setDate(order.getDate());
        orderToUpdate.setStatus(order.getStatus());
        orderToUpdate.setTotalAmount(order.getTotalAmount());

        return orderRepository.save(orderToUpdate);
    }

    @Override
    public void deleteOrder(Long id) {
        if (!orderRepository.existsById(id))
            throw new NotFoundException("Could not find this order.");

        orderRepository.deleteById(id);
    }
}
