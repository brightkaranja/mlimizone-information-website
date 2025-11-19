package com.activities.comoposenavigation.screens

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Icon
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.NavigationBarItem
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberUpdatedState
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.navigation.compose.rememberNavController
import com.activities.comoposenavigation.HomeTab

@Composable
fun HomeScreen(){
    val navController = rememberNavController()
    var selectedTab by remember{ mutableStateOf(0) }

    val tabs = listOf(HomeTab.Home,
        HomeTab.Products,
        HomeTab.Cart,
        HomeTab.Settings)

    Scaffold(bottomBar = {
        NavigationBar {
            tabs.forEachIndexed { index, tab ->
                NavigationBarItem(
                    icon = { Icon(imageVector = tab.icon, contentDescription = tab.title)},
                    label = { Text(text = tab.title) },
                    selected = selectedTab == index,
                    onClick = { selectedTab = index}
                )
            }
            }
        }
    )
    { paddingValues ->
Box(
    modifier = Modifier
    .fillMaxSize()
    .padding(paddingValues )){
    when (selectedTab){
        0 -> HomeContent()
        1 -> ProductsContent()
        2 -> CartContent()
        3 -> SettingsContent()
    }
}
}

}

@Composable
fun HomeContent(){
    Text (text = "Home")
}

@Composable
fun ProductsContent(){
    Text (text = "Product")
}

@Composable
fun CartContent(){
    Text (text = "Cart")
}
@Composable
fun SettingsContent(){
    Text (text = "Settings")
}

@Preview(showBackground = true)
@Composable
fun HomeScreenPreview(){
    HomeScreen()
}