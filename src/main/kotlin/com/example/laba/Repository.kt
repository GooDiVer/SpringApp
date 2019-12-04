package com.example.laba

import org.springframework.data.repository.CrudRepository

interface StudentRepository: CrudRepository<Student, Long> {
    fun findAllBy(): MutableList<Student>
}

interface AppRepository: CrudRepository<App, Long> {
    fun findAllBy(): MutableList<App>
}

