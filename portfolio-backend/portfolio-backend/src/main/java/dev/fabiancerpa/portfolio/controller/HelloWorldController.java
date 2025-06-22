package dev.fabiancerpa.portfolio.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

    @GetMapping("/api/hello-world")
    public String sayHello() {
        return "Hello world!";
    }
}
