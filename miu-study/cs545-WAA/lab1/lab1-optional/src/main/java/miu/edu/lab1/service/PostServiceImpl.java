package miu.edu.lab1.service;

import miu.edu.lab1.domain.Post;
import miu.edu.lab1.domain.dto.PostDto;
import miu.edu.lab1.repo.PostRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PostServiceImpl implements PostService{

    @Autowired
    PostRepo postRepo;

    @Autowired
    ModelMapper modelMapper;

    @Override
    public List<Post> findAll() {
        return postRepo.findAll();
    }

    @Override
    public PostDto getById(long id) {
        /*
        var rtnPosts = postRepo.getById(id);
        PostDto p = new PostDto();
        p.setId(rtnPosts.getId());
        p.setTitle(rtnPosts.getTitle());
        p.setContent(rtnPosts.getContent());
        p.setAuthor(rtnPosts.getAuthor());
        return p;
        */
        return  modelMapper.map(postRepo.getById(id), PostDto.class);
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

    @Override
    public List<Post> getPostByAuthor(String author) {
        List<Post> allPosts = new ArrayList<>(findAll());
        return allPosts.stream()
                .filter(p -> p.getAuthor().equals(author)).collect(Collectors.toList());

    }
}
