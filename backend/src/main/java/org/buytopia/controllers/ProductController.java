package org.buytopia.controllers;

import java.util.List;

import org.buytopia.models.Product;
import org.buytopia.models.dto.ProductRequest;
import org.buytopia.services.GoogleDriveService;
import org.buytopia.services.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    private final ProductService productService;
    private final GoogleDriveService googleDriveService;

    public ProductController(ProductService productService, GoogleDriveService googleDriveService) {
        this.productService = productService;
        this.googleDriveService = googleDriveService;
    }

    @GetMapping
    public List<Product> findAllProducts(){
        return productService.getAllProducts();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> findProductById(@PathVariable Long id){
        Product product = productService.findProductById(id);
        return ResponseEntity.ok(product);
    }

    @PostMapping("/create")
    public ResponseEntity<Product> createProduct(@Valid @ModelAttribute ProductRequest productRequest){
        try {
            MultipartFile image = (MultipartFile) productRequest.getImage();
            String imageUrl = googleDriveService.uploadImage(image);

            Product product = new Product();
            product.setName(productRequest.getName());
            product.setDescription(productRequest.getDescription());
            product.setPrice(productRequest.getPrice());
            product.setStock(productRequest.getStock());
            product.setCategory(productRequest.getCategory());
            product.setImage(imageUrl);

            productService.createProduct(product);
            return ResponseEntity.ok(product);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @ModelAttribute ProductRequest productRequest){
        Product updatedProduct = productService.findProductById(id);

        if (productRequest.getImage() instanceof MultipartFile) {
            googleDriveService.deleteImage(updatedProduct.getImage());
            MultipartFile image = (MultipartFile) productRequest.getImage();
            String imageUrl = googleDriveService.uploadImage(image);
            updatedProduct.setImage(imageUrl);
        }

        updatedProduct.setName(productRequest.getName());
        updatedProduct.setDescription(productRequest.getDescription());
        updatedProduct.setPrice(productRequest.getPrice());
        updatedProduct.setStock(productRequest.getStock());
        updatedProduct.setCategory(productRequest.getCategory());

        productService.updateProduct(id, updatedProduct);

        return ResponseEntity.ok(updatedProduct);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long id){
        Product product = productService.findProductById(id);
        googleDriveService.deleteImage(product.getImage());
        productService.deleteProduct(id);

        return ResponseEntity.ok().build();
    }
}
