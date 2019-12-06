package com.example.laba

import org.springframework.web.bind.annotation.*
import java.lang.Exception

@RestController
class RestControllers(private val appRepository: AppRepository) {
    @PutMapping("/updatedata/{id}")
    fun updatedata(@PathVariable(value = "id") id: Long, @RequestBody upApp: UpdatedApp) {
        var app: App = appRepository.findById(id).orElseThrow { Exception("Resource not found") }
        println(app)
        app.appName = upApp.appName
        app.teamName = upApp.teamName
        app.releaseDate = upApp.releaseDate
        app.money = upApp.money
        appRepository.save(app)
        println(appRepository.findAll())
    }

    @DeleteMapping("/deletedata/{id}")
    fun deletedata(@PathVariable(value = "id") id: Long) {
        appRepository.deleteById(id)
        println(appRepository.findAll())
    }

    @PostMapping("/savedatatotable")
    @ResponseBody
    fun saveDataToTable(@RequestBody taskText: App): ResponceText {
        val savedresult = appRepository.save(taskText)
        println("Saved app: $savedresult")
        return ResponceText("saved", taskText.id)
    }
}
