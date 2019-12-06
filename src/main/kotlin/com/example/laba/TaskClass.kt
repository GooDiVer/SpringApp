package com.example.laba

class TaskClass(val input: String): Result {

    fun findMax(): Int {
        var figures: List<String> = input.split(",")
        var max: Int = Integer.parseInt(figures[0])
        var cur: Int = 0;
        for(i in figures) {
            cur = Integer.parseInt(i)
            if (cur > max)
                max = cur
        }
        return max
    }

    override fun getResult(): String {
        return findMax().toString()
    }
}