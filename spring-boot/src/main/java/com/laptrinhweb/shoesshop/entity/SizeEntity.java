package com.laptrinhweb.shoesshop.entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name ="size")
public class SizeEntity extends FilterEntity{
}
