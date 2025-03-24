// Copyright (c) 2025 Catherine All rights reserved
//
// Created by: Catherine Vu
// Created on: March 23 2025
// This file contains the JS functions for index.html

/**
 * Calculates Length and Width of Rectangle 
 */

function calculatePerimeter() {
    // Get length and width values
    let length = document.getElementById('length').value;
    let width = document.getElementById('width').value;
    let result = document.getElementById('result');

    // Check if length and width are provided and are valid numbers
    if (length & width && !isNaN(length) && !isNaN(width)) {
      // Convert values to numbers
        length = parseFloat(length);
        width = parseFloat(width);

      // Calculate the perimeter of the rectangle
      let perimeter = 2 * (length + width);

      // Display the result
        result.innerText = "Perimeter is: " + perimeter + " cm";
    } else {
      // If length or width is missing or invalid
        result.innerText = "Please enter valid numbers for both length and width.";
    }
    }

