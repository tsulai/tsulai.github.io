package miu.edu.lab.service;

import miu.edu.lab.domain.PostUser;
import miu.edu.lab.domain.dto.PostDto;
import miu.edu.lab.domain.dto.PostUserDto;

import java.util.List;

public interface PostUserService {
    List<PostUserDto> findAll();
    PostUserDto getById(long id);
    void addUser(PostUser user);
    void deleteUser(long id);
    void updateUser(long id, PostUser user);
    List<PostDto> getAllPostsByUserId(long id);
    List<PostUserDto> findUsersWithMoreThanOnePost();
}
