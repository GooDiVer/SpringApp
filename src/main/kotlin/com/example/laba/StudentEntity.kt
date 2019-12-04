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

@Entity
data class App(
        var appName: String = "",
        var teamName: String = "",
        var releaseDate: String = "",
        var money: String = "",
        @Id @GeneratedValue
        var id: Long = 0
)

