package miu.edu.lab.repo;

import miu.edu.lab.domain.Post;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PostRepo extends CrudRepository<Post, Long> {
    List<Post> findAll();

    /*public Post getById(long id);
    public void addPost(Post p);
    public void deletePost(long id);
    public void updatePost(long id, Post p);
    */
}
