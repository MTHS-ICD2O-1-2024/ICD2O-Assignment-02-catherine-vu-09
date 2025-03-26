// Copyright (c) 2025 Catherine All rights reserved
//
// Created by: Catherine Vu
// Created on: March 23 2025
// This file contains the JS functions for index.html

/**
 * Calculates Length and Width of Rectangle 
 */

"use strict";

/**
* This function calculates the perimeter of a rectangle.
*/
function calculatePerimeter() {
let length = parseFloat(document.getElementById("length").value);
let width = parseFloat(document.getElementById("width").value);

if (!isNaN(length) && !isNaN(width)) {
let perimeter = 2 * (length + width);

document.getElementById("Perimeter").innerHTML =
`<p>Perimeter of the rectangle is: ${perimeter} cm</p>`;
} else {
document.getElementById("Perimeter").innerHTML =
`<p>Please enter valid numbers for both length and width.</p>`;
}
}