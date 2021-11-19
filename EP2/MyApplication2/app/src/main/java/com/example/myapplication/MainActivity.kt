package com.example.myapplication

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import com.google.android.gms.auth.api.signin.GoogleSignIn
import com.google.android.gms.auth.api.signin.GoogleSignInClient
import com.google.android.gms.auth.api.signin.GoogleSignInOptions
import com.google.android.gms.common.SignInButton

import android.content.Intent
import android.media.Image
import android.util.Log
import android.widget.Button
import android.widget.ImageView
import android.widget.LinearLayout
import android.widget.TextView

import com.google.android.gms.common.api.ApiException
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.GoogleAuthProvider
import com.google.firebase.auth.ktx.auth
import com.google.firebase.ktx.Firebase

const val RC_SIGN_IN = 1122
const val TAG = "GoogleActivity"

class MainActivity : AppCompatActivity() {

    private lateinit var auth: FirebaseAuth
    private lateinit var mGoogleSignInClient: GoogleSignInClient


    override fun onCreate(savedInstanceState: Bundle?)
    {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

    // Configure sign-in to request the user's ID, email address, and basic
    // profile. ID and basic profile are included in DEFAULT_SIGN_IN.
        // Configure Google Sign In
        val gso = GoogleSignInOptions
            .Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
            .requestIdToken(getString(R.string.dft_web_client_id))
            .requestEmail()
            .build()

        // Build a GoogleSignInClient with the options specified by gso.
        mGoogleSignInClient = GoogleSignIn.getClient(this, gso)


        // ...
        // Initialize Firebase Auth
        auth = Firebase.auth

        findViewById<SignInButton>(R.id.google_sign_in_button).setOnClickListener {
            val signInIntent: Intent = mGoogleSignInClient.signInIntent

            Log.d(TAG, "onClick: begin Google SignIn")
        //    startActivityForResult(signInIntent, RC_SIGN_IN)
            signIn()
        }


        // button for next screen
        findViewById<Button>(R.id.welcome_nextScreen).setOnClickListener {
            val secondActivityIntent = Intent(
                this,
                HotelsActivity::class.java
            )
            startActivity(secondActivityIntent)
        }
    }


    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)

        // Result returned from launching the Intent from GoogleSignInClient.getSignInIntent(...);
        if (requestCode == RC_SIGN_IN) {
            // The Task returned from this call is always completed, no need to attach
            // a listener.
            Log.d(TAG, "onActivityResult: Google SignIn intent result")
            val task = GoogleSignIn.getSignedInAccountFromIntent(data)

            try {
                // Google Sign In was successful, authenticate with Firebase
                val account = task.getResult(ApiException::class.java)!!
                Log.d(TAG, "firebaseAuthWithGoogle:" + account.id)
                firebaseAuthWithGoogle(account.idToken!!)
            } catch (e: ApiException) {
                // Google Sign In failed, update UI appropriately
                Log.w(TAG, "Google sign in failed", e)
                Log.w(TAG, "signInResult: failed code=" + e.getStatusCode());
            }
        }
    }

    private fun firebaseAuthWithGoogle(idToken: String) {
        val credential = GoogleAuthProvider.getCredential(idToken, null)
        auth.signInWithCredential(credential)
            .addOnCompleteListener(this) { task ->
                if (task.isSuccessful) {
                    // Sign in success, update UI with the signed-in user's information
                    Log.d(TAG, "signInWithCredential:success")
                    val user = auth.currentUser

                    //user.displayName
                    findViewById<SignInButton>(R.id.google_sign_in_button).visibility = View.VISIBLE
                    findViewById<Button>(R.id.welcome_nextScreen).visibility = View.VISIBLE
                    findViewById<TextView>(R.id.welcome_error_msg).visibility = View.GONE

                } else {
                    // If sign in fails, display a message to the user.
                    Log.w(TAG, "signInWithCreChallengesdential:failure", task.exception)
                    findViewById<LinearLayout>(R.id.welcome_container).visibility = View.GONE
                    findViewById<TextView>(R.id.welcome_error_msg).visibility = View.VISIBLE
                }
            }
    }

    private fun signIn() {
        val signInIntent = mGoogleSignInClient.signInIntent
        startActivityForResult(signInIntent, RC_SIGN_IN)
    }
}