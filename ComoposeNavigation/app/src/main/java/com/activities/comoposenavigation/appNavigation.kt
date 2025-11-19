package com.activities.comoposenavigation

import android.icu.text.CaseMap.Title
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.Home
import androidx.compose.material.icons.outlined.Settings
import androidx.compose.material.icons.outlined.ShoppingBag
import androidx.compose.material.icons.outlined.ShoppingCart
import androidx.compose.material3.Icon
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.activities.comoposenavigation.screens.HomeScreen
import com.example.composenavigation.screens.LoginScreen
import com.practice.composenavigation.screens.SignUpScreen


sealed class Screen(val route:String){
    object Login: Screen("Login")
    object SignUp: Screen("signup")
    object Home: Screen("home")
}

sealed class HomeTab(val route:String, val title: String, val icon: ImageVector){
    object Home: HomeTab("home", "Home", Icons.Outlined.Home)
    object Products: HomeTab("products", "Products", Icons.Outlined.ShoppingBag)
    object Cart: HomeTab("cart", "Cart", Icons.Outlined.ShoppingCart)
    object Settings: HomeTab("settings", "Settings", Icons.Outlined.Settings)
}
@Composable
fun AppNavigation(){
    val navController = rememberNavController()

    NavHost(
        navController = navController,
        startDestination = Screen.Login.route
    )
    {
        composable(Screen.Login.route){
            LoginScreen(
                onClickLogin = { navController.navigate(Screen.Home.route) },
                onClickSingUp = { navController.navigate(Screen.SignUp.route) }
            )
        }
        composable(Screen.SignUp.route) {
            SignUpScreen(onClickSignUp = {navController.navigate(Screen.Home.route)},
                onClickLogin = {navController.navigate(Screen.Login.route)})
        }
        composable(Screen.Home.route){
            HomeScreen()
        }
    }
}