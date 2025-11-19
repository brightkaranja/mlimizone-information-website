package com.practice.composenavigation.screens

import android.widget.Space
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.material3.Button
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.style.TextDecoration
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Composable
fun SignUpScreen(
    onClickSignUp: () -> Unit,
    onClickLogin: () -> Unit
){
    var email by remember { mutableStateOf("") }
    var password by remember { mutableStateOf("") }
    var name by remember { mutableStateOf("") }
    var passwordConfirm by remember { mutableStateOf("") }

    Column (modifier = Modifier.fillMaxSize(),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center){

        Text(
            text = "Sign Up",
            fontWeight = FontWeight.Bold,
            fontSize = 24.sp)

        Spacer(Modifier.height(16.dp))

        OutlinedTextField(
            value = email,
            onValueChange = {email=it},
            label = { Text(text="Email") }
        )

        Spacer(Modifier.height(16.dp))
        OutlinedTextField(
            value = name,
            onValueChange = {name=it},
            label = { Text(text="Name") }
        )

        Spacer(Modifier.height(16.dp))
        OutlinedTextField(
            value = password,
            onValueChange = {password=it},
            label = { Text(text="Password") },
            visualTransformation = PasswordVisualTransformation()

        )

        Spacer(Modifier.height(16.dp))
        OutlinedTextField(
            value = passwordConfirm,
            onValueChange = {passwordConfirm=it},
            label = { Text(text="Password Confirmation") }
        )

        Spacer(Modifier.height(16.dp))

        Button(onClick = {onClickSignUp()}) {
            Text(text="Sign Up")
        }

        Spacer(Modifier.height(16.dp))

        Text(
            text="Already registered? Log in",
            textDecoration = TextDecoration.Underline,
          modifier = Modifier.clickable { onClickLogin() }
        )

    }

}

@Preview(showBackground = true)
@Composable
fun SignUpScreenPreview(){
    SignUpScreen({}, {})
}