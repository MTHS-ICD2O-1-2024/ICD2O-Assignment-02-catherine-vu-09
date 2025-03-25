// Copyright (c) 2025 Catherine All rights reserved
//
// Created by: Catherine Vu
// Created on: March 23 2025
// This file contains the JS functions for index.html

/**
 * Calculates Length and Width of Rectangle 
 */

function calculatePerimeter() {
 // input

    const lengthOfRectangle = parseFloat (document.getElementById('length-of-rectangle').value)
    const heightOfRectangle = parseInt(document.getElementById('width-of-rectangle').value)

  // process
  const areaOfRectangle = lengthOfRectangle * heightOfRectangle
  const perimeterOfRectangle = (lengthOfRectangle + heightOfRectangle) * 2

  // output
    document.getElementById('perimeter').innerHTML = 'Perimeter is: ' + perimeterOfRectangle + ' cm'

    
}


