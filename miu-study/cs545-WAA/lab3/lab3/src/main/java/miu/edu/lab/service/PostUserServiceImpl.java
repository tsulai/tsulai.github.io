package miu.edu.lab.service;

import miu.edu.lab.domain.PostUser;
import miu.edu.lab.domain.dto.PostDto;
import miu.edu.lab.domain.dto.PostUserDto;
import miu.edu.lab.helper.ListMapper;
import miu.edu.lab.repo.PostUserRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PostUserServiceImpl implements PostUserService{

    @Autowired
    PostUserRepo postUserRepo;

    @Autowired
    ModelMapper modelMapper;

    @Autowired
    ListMapper<PostUser, PostUserDto> listMapperUserToDto;

    @Override
    public List<PostUserDto> findAll() {
        return (List<PostUserDto>)listMapperUserToDto.mapList(postUserRepo.findAll(), new PostUserDto());
    }

    @Override
    public PostUserDto getById(long id) {
        return modelMapper.map(postUserRepo.findById(id), PostUserDto.class);
    }

    @Override
    public void addUser(PostUser user) {
        postUserRepo.save(user);
    }

    @Override
    public void deleteUser(long id) {
        postUserRepo.deleteById(id);
    }

    @Override
    public void updateUser(long id, PostUser user) {
        if(postUserRepo.existsById(id)) {
            postUserRepo.save(user);
        }
    }

    @Override
    public List<PostDto> getAllPostsByUserId(long id) {
        return postUserRepo.findById(id).getPosts()
                .stream()
                .map(p -> modelMapper.map(p, PostDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<PostUserDto> findUsersWithMoreThanOnePost() {
        return postUserRepo.findUsersWithMoreThanOnePost()
                .stream()
                .map(u -> modelMapper.map(u, PostUserDto.class))
                .collect(Collectors.toList());
    }
}
