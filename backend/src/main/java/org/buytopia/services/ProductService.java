package org.buytopia.services;

import org.buytopia.models.Product;

import java.util.List;

public interface ProductService {
    List<Product> getAllProducts();
    Product findProductById(Long id);

    Product createProduct(Product product);

    Product updateProduct(Product product);

    void deleteProduct(Long id);
}
