package com.ssafy.pnut.dto;

import com.ssafy.pnut.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
public class UserDto {
    private String email;
    private String password;
    private String nickname;
    private String name;
    private String type;
    private LocalDateTime joinDate;
    private String profileImageUrl;
    private String age;
    private String gender;
    private String auth;

    public static UserDto toDto(User user){
        return new UserDto(
                user.getEmail(),
                user.getPassword(),
                user.getNickname(),
                user.getName(),
                user.getType(),
                user.getJoin_date(),
                user.getProfile_image_url(),
                String.valueOf(user.getAge()),
                String.valueOf(user.getGender()),
                user.getAuth()
        );
    }

    public User toEntity(){
        return new User(email, password, null, null, nickname, name, type, joinDate, profileImageUrl, Integer.parseInt(age), Integer.parseInt(gender), auth);
    }
}
