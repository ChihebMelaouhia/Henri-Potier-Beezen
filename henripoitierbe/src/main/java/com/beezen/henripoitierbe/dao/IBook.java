package com.beezen.henripoitierbe.dao;

import com.beezen.henripoitierbe.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IBook extends JpaRepository<Book, Long> {
}
