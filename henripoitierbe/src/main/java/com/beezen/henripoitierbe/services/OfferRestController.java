package com.beezen.henripoitierbe.services;

import com.beezen.henripoitierbe.dao.IOffer;
import com.beezen.henripoitierbe.entity.Offer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/offers")
public class OfferRestController {

    @Autowired
    private IOffer iOffer;
    @GetMapping("/all")
    public HashMap<String, List<Offer>> getOffers() {
        HashMap<String, List<Offer>> hashMap = new HashMap<>();
        hashMap.put("offers", iOffer.findAll());
        return hashMap;
    }


    @GetMapping("/getone")
    public HashMap<String, Offer> getOneOffer(String id) {
        HashMap<String, Offer> hashMap = new HashMap<>();
        hashMap.put("offers", iOffer.getOne(id));
        return hashMap;
    }
}
