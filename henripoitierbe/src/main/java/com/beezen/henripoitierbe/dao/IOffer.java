package com.beezen.henripoitierbe.dao;

import com.beezen.henripoitierbe.entity.Offer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IOffer extends JpaRepository<Offer, String> {
}
