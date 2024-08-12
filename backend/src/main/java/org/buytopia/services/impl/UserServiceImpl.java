package org.buytopia.services.impl;

import java.util.List;

import org.buytopia.exceptions.NotFoundException;
import org.buytopia.models.User;
import org.buytopia.repositories.UserRepository;
import org.buytopia.services.UserService;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    @Override
    public List<User> findAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserProfile(String email) {
        return userRepository.findByEmail(email).orElseThrow(() -> new NotFoundException("Could not find this user."));
    }

    @Override
    public User findUserById(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new NotFoundException("Could not find this user."));
    }

    @Override
    public User updateUser(Long id, User user) {
        User userToUpdate = userRepository.findById(id).orElseThrow(() -> new NotFoundException("Could not find this user."));
        userToUpdate.setName(user.getName());
        userToUpdate.setRole(user.getRole());

        return userRepository.save(userToUpdate);
    }

    @Override
    public void deleteUser(Long id) {
        if (!userRepository.existsById(id))
            throw new NotFoundException("Could not find this user.");
        
        userRepository.deleteById(id);
    }
}
