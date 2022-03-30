package miu.edu.lab1.controller;

import miu.edu.lab1.domain.Post;
import miu.edu.lab1.domain.dto.PostDto;
import miu.edu.lab1.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    PostService postService;

    @GetMapping
    public List<Post> getPost(){
        return postService.findAll();
    }

    @GetMapping("/{id}")
    public PostDto getPostById(@PathVariable("id") long id){
        return postService.getById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void addPost(@RequestBody Post post){
        postService.addPost(post);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void deletePost(@PathVariable("id") long id){
        postService.deletePost(id);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public  void updatePost(@PathVariable("id") long id, @RequestBody Post p){
        postService.updatePost(id, p);
    }

    /*
    http://localhost:8080/posts/filter?author=Su Lai
     */
    @GetMapping("/filter")
    public List<Post> getPostById(@RequestParam("author") String author){
        return postService.getPostByAuthor(author);
    }
}
