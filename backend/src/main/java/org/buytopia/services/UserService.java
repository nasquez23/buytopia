package org.buytopia.services;

import org.buytopia.models.User;

public interface UserService {
    User findUserById(Long id);

    User updateUser(Long id, User user);

    void deleteUser(Long id);
}
