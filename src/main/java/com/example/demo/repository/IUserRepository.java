package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.models.Supplier;
import com.example.demo.models.User;

public interface IUserRepository extends JpaRepository<User, Long>{

}
