package com.laptrinhweb.shoesshop;

import com.laptrinhweb.shoesshop.api.ProductController;
import com.laptrinhweb.shoesshop.services.impl.ProductService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ComponentScans;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.io.File;

@SpringBootApplication
@EnableJpaRepositories("com.laptrinhweb.shoesshop.repositories")
public class ShoesShopApplication {

    public static void main(String[] args) {
        SpringApplication.run(ShoesShopApplication.class, args);
    }
}
