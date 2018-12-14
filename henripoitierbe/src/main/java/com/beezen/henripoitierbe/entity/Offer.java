package com.beezen.henripoitierbe.entity;


import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="offers")
public class Offer implements Serializable {

    @Id
    private String type;
    private Integer slicevalue;
    private Integer value;

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getSliceValue() {
        return slicevalue;
    }

    public void setSliceValue(Integer slicevalue) {
        this.slicevalue = slicevalue;
    }

    public Integer getValue() {
        return value;
    }

    public void setValue(Integer value) {
        this.value = value;
    }
}
