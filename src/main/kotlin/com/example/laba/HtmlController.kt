package com.example.laba

import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.ui.set
import org.springframework.web.bind.annotation.GetMapping

@Controller
class HtmlController(private val repository: StudentRepository, private val laba: LabaProperties) {
    @GetMapping("/About", "/")
    fun about(model: Model): String {
        model["name"] = "Dima"
        val student = repository.findAllBy()
        model["student"] = student.first()
        model["links"] = listOf(laba.firstPage, laba.secondPage, laba.thirdPage)
        return "about"
    }

    @GetMapping("/Task")
    fun task(model: Model): String {
        model["name"] = "Dima"
        val student = repository.findAllBy()
        model["student"] = student.first()
        model["links"] = listOf(laba.firstPage, laba.secondPage, laba.thirdPage)
        return "task"
    }

    @GetMapping("/Table")
    fun stable(model: Model): String {
        model["name"] = "Dima"
        val student = repository.findAllBy()
        model["student"] = student.first()
        model["links"] = listOf(laba.firstPage, laba.secondPage, laba.thirdPage)
        return "stTable"
    }

    @GetMapping("/add")
    fun table(model: Model): String {
        model["name"] = "Dima"
        val student = repository.findAllBy()
        model["student"] = student.first()
        model["links"] = listOf(laba.firstPage, laba.secondPage, laba.thirdPage)
        return "stTable"
    }


}