package miu.edu.lab.service;

import miu.edu.lab.domain.Comment;
import miu.edu.lab.domain.dto.CommentDto;
import miu.edu.lab.repo.CommentRepo;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class CommentServiceImpl implements CommentService {

    @Autowired
    CommentRepo commentRepo;

    @Override
    public List<Comment> findAll() {
        return commentRepo.findAll();
    }

    @Override
    public CommentDto getById(long id) {
        return null;
    }
}
