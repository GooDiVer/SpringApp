package com.example.laba

import org.springframework.data.repository.CrudRepository

interface StudentRepository: CrudRepository<Student, Long> {
    fun findAllBy(): MutableList<Student>
}