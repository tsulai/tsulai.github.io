package miu.edu.lab.service;

import miu.edu.lab.domain.Post;
import miu.edu.lab.domain.PostUser;
import miu.edu.lab.domain.dto.PostDto;
import miu.edu.lab.repo.PostRepo;
import miu.edu.lab.repo.PostUserRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Service
public class PostServiceImpl implements PostService{

    @Autowired
    PostRepo postRepo;

    @Autowired
    PostUserRepo postUserRepo;

    @PersistenceContext
    EntityManager entityManager;

    @Autowired
    ModelMapper modelMapper;

    @Override
    public List<Post> findAll() {
        return postRepo.findAll();
    }

    @Override
    public PostDto getById(long id) {
        return  modelMapper.map(postRepo.findById(id), PostDto.class);
    }

    @Override
    public void addPost(Post p) {
        // --- for join column data save ---
//        Post newP = new Post();
//        newP.setTitle(p.getTitle());
//        newP.setAuthor(p.getAuthor());
//        newP.setContent(p.getContent());
//        //var user = postUserRepo.findById(p.getId());
        postRepo.save(p);
    }

    @Override
    public void deletePost(long id) {
        postRepo.deleteById(id);
    }

    @Override
    public void updatePost(long id, Post p) {
        if(postRepo.existsById(id)){
            postRepo.save(p);
        }
    }
}
