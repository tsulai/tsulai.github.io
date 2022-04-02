package miu.edu.lab.service;

import miu.edu.lab.domain.Comment;
import miu.edu.lab.domain.dto.CommentDto;

import java.util.List;

public interface CommentService {
    List<Comment> findAll();
    public CommentDto getById(long id);


}
