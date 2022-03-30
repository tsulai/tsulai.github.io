package miu.edu.lab1.domain;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Post {
    private long id;
    private String title;
    private String content;
    private String author;
}
