package miu.edu.lab1.service;

import miu.edu.lab1.domain.Post;
import miu.edu.lab1.domain.dto.PostDto;
import miu.edu.lab1.repo.PostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostServiceImpl implements PostService{

    @Autowired
    PostRepo postRepo;

    @Override
    public List<Post> findAll() {
        return postRepo.findAll();
    }

    // --- without Dto --
//    @Override
//    public Post getById(long id) {
//        return postRepo.getById(id);
//    }

    // --- with Dto ---
    @Override
    public PostDto getById(long id) {
        var rtnPosts = postRepo.getById(id);
        PostDto p = new PostDto();
        p.setId(rtnPosts.getId());
        p.setTitle(rtnPosts.getTitle());
        p.setContent(rtnPosts.getContent());
        p.setAuthor(rtnPosts.getAuthor());
        return p;
    }

    @Override
    public void addPost(Post p) {
        postRepo.addPost(p);
    }

    @Override
    public void deletePost(long id) {
        postRepo.deletePost(id);
    }

    @Override
    public void updatePost(long id, Post p) {
        postRepo.updatePost(id, p);
    }
}
