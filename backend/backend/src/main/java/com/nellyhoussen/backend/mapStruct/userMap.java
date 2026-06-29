package com.nellyhoussen.backend.mapStruct;

import com.nellyhoussen.backend.DTO.userGet;
import com.nellyhoussen.backend.DTO.userPost;
import com.nellyhoussen.backend.Entity.user;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface userMap {
    @Mapping(target = "id", ignore = true)
    user toEntity(userPost data);
    userGet toDto(user data);
}
