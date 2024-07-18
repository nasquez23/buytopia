package org.buytopia.services;

import java.util.Optional;

import org.buytopia.models.User;

public interface UserService {
    User findUserById(Long id);

    User updateUser(User user);

    void deleteUser(Long id);
}
