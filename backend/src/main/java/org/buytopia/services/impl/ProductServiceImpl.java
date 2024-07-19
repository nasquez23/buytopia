package org.buytopia.services.impl;

import org.buytopia.exceptions.NotFoundException;
import org.buytopia.models.Product;
import org.buytopia.repositories.ProductRepository;
import org.buytopia.services.ProductService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product findProductById(Long id) {
        return productRepository.findById(id).orElseThrow(() -> new NotFoundException("Could not find this product."));
    }

    @Override
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Product updateProduct(Long id, Product product) {
        Product productToUpdate = productRepository.findById(id).orElseThrow(() -> new NotFoundException("Could not find this product."));
        productToUpdate.setCategory(product.getCategory());
        productToUpdate.setName(product.getName());
        productToUpdate.setDescription(product.getDescription());
        productToUpdate.setImage(product.getImage());
        productToUpdate.setPrice(product.getPrice());
        productToUpdate.setStock(product.getStock());

        return productRepository.save(productToUpdate);
    }

    @Override
    public void deleteProduct(Long id) {
        if (!productRepository.existsById(id))
            throw new NotFoundException("Could not find this product.");

        productRepository.deleteById(id);
    }
}
