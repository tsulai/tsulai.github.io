package miu.edu.lab.domain;

import lombok.*;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    private String content;
    private String author;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "postuser_id")
    private PostUser postuser;
}
