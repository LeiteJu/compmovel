package com.example.myapplication

import android.content.pm.PackageManager
import android.location.Location
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import androidx.core.app.ActivityCompat

import com.google.android.gms.maps.CameraUpdateFactory
import com.google.android.gms.maps.GoogleMap
import com.google.android.gms.maps.OnMapReadyCallback
import com.google.android.gms.maps.SupportMapFragment
import com.google.android.gms.maps.model.LatLng
import com.google.android.gms.maps.model.MarkerOptions
import com.example.myapplication.databinding.ActivityMapsBinding
import com.google.android.gms.location.FusedLocationProviderClient
import com.google.android.gms.location.LocationServices
import com.google.android.gms.maps.model.Marker

class MapsActivity : AppCompatActivity(), OnMapReadyCallback, GoogleMap.OnMarkerClickListener {

    private lateinit var fusedLocationProviderClient: FusedLocationProviderClient
    private lateinit var mMap: GoogleMap
    private lateinit var lastLocation: Location
    // private lateinit var binding: ActivityMapsBinding

    companion object{
        private const val LOCATION_REQUEST_CODE = 1
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_maps)



        // fetchLocation()

        // maps
        // binding = ActivityMapsBinding.inflate(layoutInflater)


        // Obtain the SupportMapFragment and get notified when the map is ready to be used.
        val mapFragment = supportFragmentManager
            .findFragmentById(R.id.map) as SupportMapFragment
        mapFragment.getMapAsync(this)

        // current location
        fusedLocationProviderClient = LocationServices.getFusedLocationProviderClient(this)
    }

    override fun onMapReady(googleMap: GoogleMap) {
        mMap = googleMap

        mMap.uiSettings.isZoomControlsEnabled = true
        // mMap.uiSettings.isMyLocationButtonEnabled = true

        mMap.setOnMarkerClickListener(this)
        fetchLocation()

        // Add a marker in Sydney and move the camera
        //val sydney = LatLng(latitude.toDouble(), longitude.toDouble())
        //mMap.addMarker(MarkerOptions().position(sydney).title("Marker in Sydney"))
        //mMap.moveCamera(CameraUpdateFactory.newLatLng(sydney))
    }

    private fun fetchLocation() {


        if (ActivityCompat.checkSelfPermission(this, android.Manifest.permission.ACCESS_FINE_LOCATION)
            != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(this, arrayOf(android.Manifest.permission.ACCESS_FINE_LOCATION), LOCATION_REQUEST_CODE)
            return
        }

        mMap.isMyLocationEnabled = true

        fusedLocationProviderClient.lastLocation.addOnSuccessListener { location ->
            if(location != null){
                lastLocation = location
                val currentLatLong = LatLng(location.latitude, location.longitude)

                val markerOptions = MarkerOptions().position(currentLatLong)
                markerOptions.title("$currentLatLong")
                mMap.addMarker(markerOptions)

                mMap.animateCamera(CameraUpdateFactory.newLatLngZoom(currentLatLong, 12.0f))

                // Toast.makeText(applicationContext, "${it.latitude} ${it.longitude}", Toast.LENGTH_SHORT).show()
            }
        }

    }

    override fun onMarkerClick(p0: Marker) = false


}