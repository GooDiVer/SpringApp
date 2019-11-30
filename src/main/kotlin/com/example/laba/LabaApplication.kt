package com.example.laba

import org.springframework.boot.Banner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class LabaApplication

fun main(args: Array<String>) {
	runApplication<LabaApplication>(*args) {
		setBannerMode(Banner.Mode.OFF)
	}
}
