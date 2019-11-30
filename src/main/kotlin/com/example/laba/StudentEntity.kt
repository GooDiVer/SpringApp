package com.example.laba

import javax.persistence.*

@Entity
data class Student (
        var firstName: String = "",
        var lastName: String = "",
        var myGroup: String = "",
        var taskVar: Long = 0,
        var taskDesc: String = "",
        @Id @GeneratedValue
        var id: Long = 0)