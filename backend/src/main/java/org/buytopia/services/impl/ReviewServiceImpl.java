package org.buytopia.services.impl;

import org.buytopia.exceptions.NotFoundException;
import org.buytopia.models.Review;
import org.buytopia.repositories.ReviewRepository;
import org.buytopia.services.ReviewService;
import org.springframework.stereotype.Service;

@Service
public class ReviewServiceImpl implements ReviewService {
    private final ReviewRepository reviewRepository;

    public ReviewServiceImpl(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    @Override
    public Review findReviewById(Long id) {
        return reviewRepository.findById(id).orElseThrow(() -> new NotFoundException("Could not find this review."));
    }

    @Override
    public Review createReview(Review review) {
        return reviewRepository.save(review);
    }

    @Override
    public Review updateReview(Long id, Review review) {
        Review reviewToUpdate = reviewRepository.findById(id).orElseThrow(() -> new NotFoundException("Could not find this review."));
        reviewToUpdate.setComment(review.getComment());
        reviewToUpdate.setDate(review.getDate());
        reviewToUpdate.setRating(review.getRating());

        return reviewRepository.save(reviewToUpdate);
    }

    @Override
    public void deleteReview(Long id) {
        if (!reviewRepository.existsById(id))
            throw new NotFoundException("Could not find this review.");

        reviewRepository.deleteById(id);
    }
}
