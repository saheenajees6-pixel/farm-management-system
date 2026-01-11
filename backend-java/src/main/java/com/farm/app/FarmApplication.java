package com.farm.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@RestController
public class FarmApplication {

    @GetMapping("/")
    public String home() {
        return "Java Service Running for Farm Management System 🚜";
    }

    @GetMapping("/crops")
    public String crops() {
        RestTemplate rt = new RestTemplate();
        return rt.getForObject("http://farm-node:3000/api/crops", String.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(FarmApplication.class, args);
    }
}
