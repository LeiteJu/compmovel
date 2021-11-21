package com.example.myapplication

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.Toast
import androidx.appcompat.app.AlertDialog

class HotelsActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_hotels)

        val btnHotel1 = findViewById<Button>(R.id.hotels_btn1)
        val btnHotel2 = findViewById<Button>(R.id.hotels_btn2)
        val btnHotel3 = findViewById<Button>(R.id.hotels_btn3)
        val btnmaps = findViewById<Button>(R.id.maps_btn)
        val btnbook = findViewById<Button>(R.id.book_btn)

        btnHotel1.setOnClickListener {
            val secondActivityIntent = Intent(
                this,
                Hotel1Activity::class.java
            )
            startActivity(secondActivityIntent)
        }

        btnHotel2.setOnClickListener {
            val secondActivityIntent = Intent(
                this,
                Hotel2Activity::class.java
            )
            startActivity(secondActivityIntent)
        }

        btnHotel3.setOnClickListener {
            val secondActivityIntent = Intent(
                this,
                Hotel3Activity::class.java
            )
            startActivity(secondActivityIntent)
        }

        btnmaps.setOnClickListener {
            val secondActivityIntent = Intent(
                this,
                MapsActivity::class.java
            )
            startActivity(secondActivityIntent)
        }

        btnbook.setOnClickListener {

            val buider = AlertDialog.Builder(this)
            buider.setMessage("Ainda em construção :/")
            buider.setPositiveButton("Ok") {_,_ ->
                Toast.makeText(this, "Obrigada pela compreensão", Toast.LENGTH_SHORT).show()
            }

            val dialog: AlertDialog = buider.create()
            dialog.show()
        }

    }




}