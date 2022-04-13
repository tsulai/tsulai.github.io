package edu.miu.springsecurity1.controller;

import edu.miu.springsecurity1.entity.dto.CommentDto;
import edu.miu.springsecurity1.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/api/v1/comments")
public class CommentController {
    @Autowired
    CommentService commentService;

    @GetMapping
    public List<CommentDto> getComment(){
       return commentService.findAll();
    }

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public void addComment(@RequestBody CommentDto c){
        commentService.addComment(c);
    }
}
