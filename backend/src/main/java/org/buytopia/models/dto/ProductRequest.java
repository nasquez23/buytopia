package org.buytopia.models.dto;

import org.buytopia.models.enums.Category;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class ProductRequest  {
    @NotNull(message = "Name is required")
    private String name;

    @NotNull(message = "Description is required")
    private String description;

    @NotNull(message = "Price is required")
    private Double price;

    @NotNull(message = "Stock is required")
    private Integer stock;

    @NotNull(message = "Category is required")
    private Category category;
    
    @NotNull(message = "Image is required")
    private Object image;
}
