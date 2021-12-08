package com.repository;

import java.util.List;
import org.jooq.Condition;

public interface CrudRepository<T> {
    T insert(T t);
    T update(T t);
    T findId(Integer id);
    List<T> findAll();
    Boolean deleteId(Integer id);
}
