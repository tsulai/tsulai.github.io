package miu.edu.lab.controller;

import miu.edu.lab.domain.Post;
import miu.edu.lab.domain.PostUser;
import miu.edu.lab.domain.dto.PostDto;
import miu.edu.lab.domain.dto.PostUserDto;
import miu.edu.lab.service.PostUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class PostUserController {

    @Autowired
    PostUserService postUserService;

    @GetMapping
    public List<PostUserDto> getPostUser(){
        return postUserService.findAll();
    }

    @GetMapping("/{id}")
    public PostUserDto getPostUserById(@PathVariable("id") long id) {return  postUserService.getById(id);}

    @GetMapping("{id}/posts")
    public List<PostDto> getAllPostsByUserId(@PathVariable("id") long id)
    {
        return postUserService.getAllPostsByUserId(id);
    }

    @GetMapping("/usersWithMoreThanOnePosts")
    public List<PostUserDto> findUsersWithMoreThanOnePost(){
        return postUserService.findUsersWithMoreThanOnePost();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void addPostUser(@RequestBody PostUser user){postUserService.addUser(user);}

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void updatePostUser(@PathVariable("id") long id, @RequestBody PostUser user){
        postUserService.updateUser(id,user);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void deletePostUser(@PathVariable("id") long id){
        postUserService.deleteUser(id);
    }



}
