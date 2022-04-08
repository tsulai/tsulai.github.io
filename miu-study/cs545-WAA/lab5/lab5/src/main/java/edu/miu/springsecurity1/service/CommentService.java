package edu.miu.springsecurity1.service;

import edu.miu.springsecurity1.entity.dto.CommentDto;

import java.util.List;

public interface CommentService {
    List<CommentDto> findAll();
    public CommentDto getById(long id);
    public void addComment (CommentDto c);
    public void deleteComment(long id);


}
