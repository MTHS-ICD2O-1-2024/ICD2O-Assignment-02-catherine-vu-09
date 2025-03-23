// Copyright (c) 2020 Catherine All rights reserved
//
// Created by: Catherine Vu
// Created on: March 23
// This file contains the JS functions for index.html

/**
 * Calculates Length and Width of Rectangle 
 */
 function calculateArea() {
 }
            let length = document.getElementById('length').value;
            let width = document.getElementById('width').value;
            
            if(length && width) {
                let area = length * width;
                document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
            }
