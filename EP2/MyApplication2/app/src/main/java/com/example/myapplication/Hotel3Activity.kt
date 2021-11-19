package com.example.myapplication

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button

class Hotel3Activity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_hotel2)

        val hotel2btnVoltar = findViewById<Button>(R.id.hotel2_btnVoltar)

        hotel2btnVoltar.setOnClickListener {
            val secondActivityIntent = Intent(
                this,
                HotelsActivity::class.java
            )
            startActivity(secondActivityIntent)
        }
    }
}