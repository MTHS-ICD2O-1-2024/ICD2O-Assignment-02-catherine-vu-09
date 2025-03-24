// Copyright (c) 2025 Catherine All rights reserved
//
// Created by: Catherine Vu
// Created on: March 23 2025
// This file contains the JS functions for index.html

/**
 * Calculates Length and Width of Rectangle 
 */

function calculatePerimeter() {
    
    let length = document.getElementById('length').value.trim();
    let height = document.getElementById('height').value.trim(); // Changed 'width' to 'height'
    let result = document.getElementById('result');

    length = parseFloat(length);
    height = parseFloat(height); // Changed 'width' to 'height'

    if (!isNaN(length) && !isNaN(height) && length > 0 && height > 0) {
        let perimeter = 2 * (length + height); // Changed 'width' to 'height'
        result.innerText = `Perimeter is: ${perimeter} cm`;
    } else {
        result.innerText = "Please enter valid positive numbers for both length and height.";
    }
}

