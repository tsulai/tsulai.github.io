package miu.edu.lab.service;

import miu.edu.lab.domain.Post;
import miu.edu.lab.domain.dto.PostDto;

import java.util.List;

public interface PostService {
    List<Post> findAll();
    // --- without Dto ---
    //public Post getById(long id);
    // --- with Dto ---
    public PostDto getById(long id);
    public void addPost(Post p);
    public void deletePost(long id);
    public void updatePost(long id, Post p);
}
