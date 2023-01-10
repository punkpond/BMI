function calculateBMI() {
    // Get the user's weight and height
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var heightM = height/100;
    // Calculate the BMI
    var bmi = weight /(heightM**2);

    // Display the BMI
    document.getElementById("result").innerHTML = "Your BMI is " + bmi.toFixed(2);
    var color;
        // Add a class to the result element based on BMI value
        if (bmi < 18.5) {
          color = 'underweight';
        } else if (bmi < 25) {
          color = 'normal';
        } else if (bmi < 30) {
          color = 'overweight';
        } else {
          color = 'obese';
        }
        // Display the BMI
        document.getElementById("result").innerHTML = "Your BMI is " + bmi.toFixed(2);
        document.getElementById("result").classList.add(color);
      }
    