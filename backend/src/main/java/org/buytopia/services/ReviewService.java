package org.buytopia.services;

import org.buytopia.models.Review;

public interface ReviewService {
    Review findReviewById(Long id);

    Review createReview(Review review);

    Review updateReview(Long id, Review review);

    void deleteReview(Long id);
}
