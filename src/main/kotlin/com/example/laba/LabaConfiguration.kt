package com.example.laba

import org.springframework.boot.ApplicationRunner
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class LabaConfiguration {
    @Bean
    fun databaseInitializer(studentRepository: StudentRepository, appRepository: AppRepository) = ApplicationRunner {
        studentRepository.save(Student(
                firstName = "Дмитрий",
                lastName = "Верба",
                myGroup = "Android",
                taskVar = 1,
                taskDesc = "найти максимальное значение среди множества чисел"
        ))
    }
}