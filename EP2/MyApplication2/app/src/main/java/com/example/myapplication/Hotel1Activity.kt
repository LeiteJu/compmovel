package com.example.myapplication

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button



class Hotel1Activity : AppCompatActivity() {

//    val url = URL("https://api.openweathermap.org/data/2.5/weather?")

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_hotel1)

        val hotel_btnVoltar = findViewById<Button>(R.id.hotel_btnVoltar)

        hotel_btnVoltar.setOnClickListener {
            val secondActivityIntent = Intent(
                this,
                HotelsActivity::class.java
            )
            startActivity(secondActivityIntent)
        }
    }
}