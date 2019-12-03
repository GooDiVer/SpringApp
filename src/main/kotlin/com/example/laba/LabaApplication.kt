package com.example.laba

import org.springframework.boot.Banner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.boot.runApplication

@SpringBootApplication
@EnableConfigurationProperties(LabaProperties::class)
class LabaApplication

fun main(args: Array<String>) {
	runApplication<LabaApplication>(*args) {
		setBannerMode(Banner.Mode.OFF)
	}
}
