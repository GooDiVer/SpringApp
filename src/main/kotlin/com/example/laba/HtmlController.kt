package com.example.laba

import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.ui.set
import org.springframework.web.bind.annotation.GetMapping

@Controller
class HtmlController(private val repository: StudentRepository) {
    @GetMapping("/")
    fun about(model: Model): String {
        model["name"] = "Dima"
        val student = repository.findAllBy()
        model["student"] = student.first()
        return "about"
    }
}