package com.example.myapplication

import android.content.ContentValues.TAG
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import com.google.android.gms.auth.api.signin.GoogleSignIn
import com.google.android.gms.auth.api.signin.GoogleSignInOptions
import com.google.android.gms.common.SignInButton
import androidx.core.app.ActivityCompat.startActivityForResult

import android.content.Intent
import android.media.Image
import android.util.Log
import android.widget.Button
import android.widget.ImageView
import android.widget.LinearLayout
import android.widget.TextView
import com.google.android.gms.auth.api.signin.GoogleSignInAccount
import com.google.android.gms.common.api.ApiException
import com.google.android.gms.tasks.Task

const val RC_SIGN_IN = 1122
var name : String = ""

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

    // Configure sign-in to request the user's ID, email address, and basic
    // profile. ID and basic profile are included in DEFAULT_SIGN_IN.
    val gso = GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
            .requestEmail()
            .build()

        // Build a GoogleSignInClient with the options specified by gso.
    val mGoogleSignInClient = GoogleSignIn.getClient(this, gso)

        findViewById<SignInButton>(R.id.google_sign_in_button).visibility = View.VISIBLE
        findViewById<SignInButton>(R.id.google_sign_in_button).setSize(SignInButton.SIZE_STANDARD)
        findViewById<SignInButton>(R.id.google_sign_in_button).setOnClickListener{
            val signInIntent = mGoogleSignInClient.signInIntent
            startActivityForResult(signInIntent, RC_SIGN_IN)

            val acct = GoogleSignIn.getLastSignedInAccount(this)
            // If login went well
            if (acct != null) {
                val personName = acct.displayName
                //val personGivenName = acct.givenName
                //val personFamilyName = acct.familyName
                //val personEmail = acct.email
                //val personId = acct.id

                // Run hotels page
                val secondActivityIntent = Intent(
                    this,
                    HotelsActivity::class.java
                )
                //startActivity(secondActivityIntent)

                findViewById<SignInButton>(R.id.google_sign_in_button).visibility = View.GONE
                findViewById<Button>(R.id.welcome_nextScreen).visibility = View.VISIBLE
                findViewById<Button>(R.id.welcome_btnGoogle).visibility = View.GONE
                findViewById<Button>(R.id.welcome_btnFacebook).visibility = View.GONE
            }

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
            val task = GoogleSignIn.getSignedInAccountFromIntent(data)
            handleSignInResult(task)
        }
    }

    private fun handleSignInResult(completedTask: Task<GoogleSignInAccount>) {
        try {
            val account: GoogleSignInAccount = completedTask.getResult(ApiException::class.java)

            // Signed in successfully, show authenticated UI.

            findViewById<SignInButton>(R.id.google_sign_in_button).visibility = View.VISIBLE
            findViewById<TextView>(R.id.welcome_error_msg).visibility = View.VISIBLE
            name = account.displayName

        } catch (e: ApiException) {
            // The ApiException status code indicates the detailed failure reason.
                println("oi")
            Log.w(TAG, "signInResult:failed code=" + e.getStatusCode());
            findViewById<LinearLayout>(R.id.welcome_container).visibility = View.GONE
            findViewById<TextView>(R.id.welcome_error_msg).visibility = View.VISIBLE
        }
    }
}