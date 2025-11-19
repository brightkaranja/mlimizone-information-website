package com.example.composenavigation.screens

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.material.icons.Icons
import androidx.compose.material3.Button
import androidx.compose.material3.Icon
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
fun LoginScreen(
    onClickLogin: () -> Unit,
    onClickSingUp: () -> Unit
)
{
    var email by remember { mutableStateOf("") }
    var password by remember { mutableStateOf("") }
    Column(modifier = Modifier.fillMaxSize(),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ){
        Text(
            text = "Login",
            fontSize = 22.sp,
            fontWeight = FontWeight.Bold
        )
        Spacer(Modifier.height(16.dp))

        OutlinedTextField(
            value = email,
            onValueChange = {email = it},
            label = {
                Text(text = "Email")
            }
        )
        OutlinedTextField(
            value = password,
            onValueChange = {password = it},
            label = {
                Text(text = "Password")
            },
            visualTransformation =PasswordVisualTransformation()

        )
        Spacer(Modifier.height(16.dp))

        Button(onClick = {onClickLogin()}){
            Text(text = "Login")
        }

        Spacer(Modifier.height(16.dp))

        Text(text = "New here? Sign Up",
            textDecoration= TextDecoration.Underline,
            modifier = Modifier.clickable { onClickSingUp() })

    }

}


@Preview(showBackground = true)
@Composable
fun LoginScreenPreview(){
    LoginScreen({},{})
}