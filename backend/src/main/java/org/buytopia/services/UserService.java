package org.buytopia.services;

import java.util.List;
import org.buytopia.models.User;

public interface UserService {
    List<User> findAllUsers();
    User getUserProfile(String email);

    User findUserById(Long id);

    User updateUser(Long id, User user);

    void deleteUser(Long id);
}
