package org.buytopia.services;

import org.buytopia.models.Review;

import java.util.Optional;

public interface ReviewService {
    Review findReviewById(Long id);

    Review createReview(Review review);

    Review updateReview(Review review);

    void deleteReview(Long id);
}
