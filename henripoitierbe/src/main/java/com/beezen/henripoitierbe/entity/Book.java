package com.beezen.henripoitierbe.entity;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "books")
public class Book implements Serializable {

    @Id
    private String isbn;
    private String title;
    private Double price;
    private String cover;
    @Column(length=10000)
    private String[] synopsis;


    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getCover() {
        return cover;
    }

    public void setCover(String cover) {
        this.cover = cover;
    }

    public String[] getSynopsis() {
        return synopsis;
    }

    public void setSynopsis(String[] synopsis) {
        this.synopsis = synopsis;
    }
}
