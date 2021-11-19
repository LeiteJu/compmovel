package com.example.myapplication

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.os.AsyncTask
import android.widget.TextView
import org.json.JSONObject

import java.net.URL
import java.util.*

//import java.text.SimpleDateFormat
//import java.util.*
//import android.R


class Hotel3Activity : AppCompatActivity() {

    var API: String = "07fa2b46fcbf7ac2c2bd778c41ed952a"
    var LAT: String= "-29.37750752082946"
    var LONG: String  = "-50.873824114035926"

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_hotel3)

        val hotel2btnVoltar = findViewById<Button>(R.id.hotel3_btnVoltar)

        hotel2btnVoltar.setOnClickListener {
            val secondActivityIntent = Intent(
                this,
                HotelsActivity::class.java
            )
            startActivity(secondActivityIntent)
        }
    }

    inner class weatherTask() : AsyncTask<String, Void, String>() {

//        override fun onPreExecute() {
//            super.onPreExecute()
//            findViewById<ProgressBar>(R.id.loader).visibility=View.VISIBLE
//            findViewById<RelativeLayout>(R.id.mainContainer).visibility = View.GONE
//            findViewById<TextView>(R.id.errortext).visibility=View.GONE
//        }
//            super.onPreExecute()
//            findViewById<ProgressBar>(R.id.loader).visibility=View.VISIBLE
//            findViewById<RelativeLayout>(R.id.mainContainer).visibility = View.GONE
//            findViewById<TextView>(R.id.errortext).visibility=View.GONE
//        }

        override fun doInBackground(vararg params: String?): String? {
            var response: String?
            try {
                response = URL("https://api.openweathermap.org/data/2.5/weather?lat=$LAT&lon=$LONG&units=metric&appid=$API")
                    .readText(Charsets.UTF_8)
            }catch (e: Exception){
                response = null
            }
            return response

        }

        override fun onPostExecute(result: String?) {
            super.onPostExecute(result)
            try {
                /* Extracting JSON returns from the API */
                val jsonObj = JSONObject(result)
                val main = jsonObj.getJSONObject("main")
                val sys = jsonObj.getJSONObject("sys")
//                val wind = jsonObj.getJSONObject("wind")
                val weather = jsonObj.getJSONArray("weather").getJSONObject(0)

                val updatedAt:Long = jsonObj.getLong("dt")
//                val updatedAtText = "Updated at: "+ SimpleDateFormat("dd/MM/yyyy hh:mm a", Locale.ENGLISH).format(Date(updatedAt*1000))
                val temp2 = "Temperatura: " + main.getString("temp")+"°C"
                /* Views populated, Hiding the loader, Showing the main design */
//                findViewById<ProgressBar>(R.id.loader).visibility = View.GONE
//                findViewById<RelativeLayout>(R.id.mainContainer).visibility = View.VISIBLE

                setContentView(R.layout.activity_hotel3)
                val textView = findViewById(R.id.hotel3_tempText) as TextView
                textView.text = temp2

            } catch (e: Exception) {
                setContentView(R.layout.activity_hotel3)
                val textView = findViewById(R.id.hotel3_tempText) as TextView
                textView.text = "Não conseguimos obter a temperatura :("
            }
        }

    }
}