package com.example.laba

import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.boot.context.properties.ConstructorBinding

@ConstructorBinding
@ConfigurationProperties("laba")
data class LabaProperties (var firstPage: String, var secondPage: String, var thirdPage: String)
