package com.repository;

import org.springframework.http.ResponseEntity;

import java.util.List;

public interface CRUDRepository<T> {
    T insert(T t);
    T update(T t);
    T findById(Integer id);
    List<T> findAll();
    ResponseEntity<String> deleteById(Integer id);
}
