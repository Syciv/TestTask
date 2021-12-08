package com.repository;

import java.util.List;

public interface CRUDRepository<T> {
    T insert(T t);
    T update(T t);
    T findById(Integer id);
    List<T> findAll();
    Boolean deleteId(Integer id);
}
