// Copyright (c) 2025 Catherine All rights reserved
//
// Created by: Catherine Vu
// Created on: March 23 2025
// This file contains the JS functions for index.html

/**
 * Calculates Length and Width of Rectangle 
 */

function calculatePerimeter() {
    // Get length and width values and trim whitespace
    let length = document.getElementById('length').value.trim();
    let width = document.getElementById('width').value.trim();
    let result = document.getElementById('result');

    // Convert values to numbers
    length = parseFloat(length);
    width = parseFloat(width);

    // Check if length and width are valid numbers
    if (!isNaN(length) && !isNaN(width) && length > 0 && width > 0) {
        // Calculate the perimeter of the rectangle
        let perimeter = 2 * (length + width);

        // Display the result
        result.innerText = `Perimeter is: ${perimeter} cm`;
    } else {
        // If length or width is missing or invalid
        result.innerText = "Please enter valid positive numbers for both length and width.";
    }
}

