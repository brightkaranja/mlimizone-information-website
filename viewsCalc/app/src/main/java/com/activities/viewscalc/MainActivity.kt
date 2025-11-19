package com.activities.viewscalc

import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat

class MainActivity : AppCompatActivity() {
    lateinit var etNum1: EditText
    lateinit var etNum2: EditText
    lateinit var btnAdd: Button
    lateinit var btnSubtract: Button
    lateinit var btnMultiply: Button
    lateinit var btnDivide: Button
    lateinit var tvResult: TextView
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }
    }

    override fun onResume(){
        super.onResume()
        castViews()
        btnAdd.setOnClickListener{
         calculate("+")
        }

        btnSubtract.setOnClickListener{
            calculate("-")
        }

        btnMultiply.setOnClickListener{
            calculate("*")
        }

        btnDivide.setOnClickListener{
            calculate("/")
        }
    }

    fun castViews(){
        etNum1 = findViewById(R.id.etNum1)
        etNum2 = findViewById(R.id.etNum2)
        btnAdd = findViewById(R.id.btnAdd)
        btnSubtract = findViewById(R.id.btnSubtract)
        btnMultiply = findViewById(R.id.btnmultiply)
        btnDivide = findViewById(R.id.btnDivide)
        tvResult = findViewById(R.id.tvResult)
    }

    fun calculate(symbol:String){
        var num1 = etNum1.text.toString()
        var num2 = etNum2.text.toString()


        if (num1.isBlank()){
            etNum1.error = "Num 1 is required"
            return
        }

        if (num2.isBlank()){
            etNum2.error = "Num 2 is required"
            return
        }

        var result = 0.0
        when(symbol){
            "+" -> result = num1.toDouble() + num2.toInt()
            "-" -> result = num1.toDouble() - num2.toInt()
            "*" -> result = num1.toDouble() * num2.toInt()
            "/" -> result = num1.toDouble() / num2.toInt()

        }
        tvResult.text = result.toString()
    }
}