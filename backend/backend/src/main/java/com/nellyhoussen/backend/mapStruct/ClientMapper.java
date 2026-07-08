package com.nellyhoussen.backend.mapStruct;

import com.nellyhoussen.backend.DTO.ClientDTO;
import com.nellyhoussen.backend.Entity.Client;

public interface ClientMapper {
    ClientDTO toDTO(Client client);
    Client toEntity(ClientDTO dto);
}
