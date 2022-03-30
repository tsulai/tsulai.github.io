package miu.edu.lab1.repo;

import miu.edu.lab1.domain.Post;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Repository
public class PostRepoImpl implements  PostRepo{

    List<Post> posts = new ArrayList<>(
            Arrays.asList(
                    new Post(1, "Tornado Warning in MidWest", "Tornado Warning in MidWest including Iowa, Illinois", "Su Lai"),
                    new Post(2, "Singapore and USA Presidential Meeting", "Singapore Prime minister and US President meet at white house on 29 Mar 2022", "Anna Jones")
            ));
    @Override
    public List<Post> findAll() {
        return posts;
    }

    @Override
    public Post getById(long id) {
        return posts
                .stream()
                .filter(p -> p.getId() == id)
                .findFirst()
                .orElse(null);
    }

    @Override
    public void addPost(Post p) {
        posts.add(p);
    }

    @Override
    public void deletePost(long id) {
        var post = posts.stream()
                .filter(p -> p.getId() == id)
                .findFirst().get();
        posts.remove(post);
    }

    @Override
    public void updatePost(long id, Post p) {
        Post toUpdate = getById(id);
        toUpdate.setTitle(p.getTitle());
        toUpdate.setAuthor(p.getAuthor());
        toUpdate.setContent(p.getContent());
    }


}
