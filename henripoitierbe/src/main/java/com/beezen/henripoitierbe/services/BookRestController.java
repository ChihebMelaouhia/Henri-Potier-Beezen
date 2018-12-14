package com.beezen.henripoitierbe.services;

import com.beezen.henripoitierbe.dao.IBook;
import com.beezen.henripoitierbe.entity.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/books")
public class BookRestController {

    @Autowired
    private IBook iBook;

    @GetMapping("/")
    public HashMap<String, String> home() {

        HashMap<String, String> hashMap = new HashMap<>();
        hashMap.put("msg", "Welcome to my Henri Poitier Application");
        return hashMap;
    }

    @GetMapping("/all")
    public List<Book> findAllBooks() {
        return iBook.findAll();
    }

    @PostMapping("/add")
    public HashMap<String, Book> addBook(@RequestBody Book book) {
        HashMap<String, Book> hashMap = new HashMap<>();
        Book b = iBook.save(book);
        hashMap.put("data", b);
        return hashMap;
    }



}
