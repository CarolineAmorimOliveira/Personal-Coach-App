// Personal Coach App
// Author: Caroline Amorim Oliveira


// === STEP 1: Input and Validation ===
//
// NAME
//
let name; // Declare variable to store user's name
let invalidName = true; // Assume name is invalid until it passes validation
while (invalidName) { // Keep asking for input while the name is invalid
  name = prompt("Enter your name:"); // Get user's name
  if (name == null) { // User cancelled the prompt
    invalidName = false; // Stop the loop
    break; // Exit the loop 
  } else { // If name is not null, continue with validation
    invalidName = !(/^[a-zA-Z]+(\s[a-zA-Z]+)*$/.test(name)); // Check if name has only letters and spaces
    if (invalidName) {
      alert("Error: Name must only contain letters and spaces."); // Show error if name is invalid
    } else {
      //
      // AGE
      //
      let age; // Declare variable to store user's age
      let invalidAge = true; // Assume age is invalid until it passes validation
      let ageInput; // Temporary variable to store user input for age
      while (invalidAge) { // Keep asking for age while input is invalid
        ageInput = prompt("Enter your age:"); // Get user's age
        if (ageInput == null) { // If user cancels the prompt
          invalidAge = true; // Keep the loop running
          break; // Exit the loop 
        } else {
          invalidAge = !(/^\d+$/.test(ageInput)); // Check if input is only digits (valid number)
          if (invalidAge) {
            alert("Error: Age must be numbers only."); // Show error if age input is not a number
          } else {
            age = parseInt(ageInput); // Convert valid string input to a number and store in 'age'
            //
            // WEIGHT
            //
            let weight; // Declare variable to store user's weight
            let invalidWeight = true; // Assume weight is invalid until it passes validation
            let weightInput; // Temporary variable to store user input for weight
            while (invalidWeight) { // Keep asking for weight while the input is invalid
              weightInput = prompt("Enter your weight (in pounds):"); // Ask the user to enter their weight
              if (weightInput == null) { // If user cancels the prompt
                invalidWeight = true; // Keep loop running
                break; // Exit loop
              } else {
                invalidWeight = !(/^\d+(\.\d+)?$/.test(weightInput)); // Validate: must be a number 
                if (invalidWeight) {
                  alert("Error: Weight must be a valid number."); // Show error if weight input is valid  
                } else {
                  weight = parseFloat(weightInput); // Convert input to a floating-point number and store it in 'weight'
                  //
                  // HEIGHT
                  //
                  let feet, inches; // Declare variables to store user's height in feet and inches
                  let heightInput; // Store the raw height input
                  let exactRegex; // Will hold the regular expression pattern
                  let match; // Will store the result from regex matching
                  let invalidHeight = true; // Assume height is invalid until it passes validation
                  while (invalidHeight) { // Keep asking for height while the input is invalid
                    heightInput = prompt("Enter your height (e.g., 5ft 11in):"); // Ask the user to enter their height
                    if (heightInput == null) { // If user cancels the prompt
                      invalidHeight = true; // Keep loop running
                      break; // Exit the loop
                    } else {
                      exactRegex = (/^([1-9]|1[0-9])ft ([0-9]|1[0-1])in$/); // Regex pattern to match height in format like "5ft 11in"
                      match = heightInput.match(exactRegex); // Try to match user's input with the pattern
                      if (match) { // If the input matches the height format
                        invalidHeight = false; // Height input is valid, stop the loop 
                        feet = parseInt(match[1]); // Extract and convert the feet part to a number
                        inches = parseInt(match[2]); // Extract and convert the inches part to a number
                        //
                        // SPORT
                        //
                        let sport; // Declare variable o store user's chosen sport
                        let allowedSports = ["soccer", "basketball", "football", "baseball", "tennis", "volleyball", "track", "wrestling", "swimming"]; // List of allowed sports
                        let invalidSport = true; // Assume sport input is invalid until it's validated
                        while (invalidSport) { // Keep asking until a valid sport is entered
                          sport = prompt("Choose your sport (e.g., Soccer, Basketball, etc.):").toLowerCase(); // Ask the user to choose a sport
                          if (sport == null) { // If the user cancels the prompt
                            invalidSport = true; // Keep loop going
                            break; // Exit the loop
                          } else {
                            invalidSport = !allowedSports.includes(sport); // Check if the sport is in the allowed list 
                            if (invalidSport) {
                              alert("Error: Please choose a valid U.S. sport from the list."); // Show error if the chosen sport is not in the list  
                            } else {
                              //
                              // FOCUS
                              //
                              let focus; // Declare variable to store user's training focus
                              let validFocus = ["speed", "strength", "endurance", "recovery"]; // List of valid training focus options
                              let invalidFocus = true; // Assume input is invalid until validated
                              while (invalidFocus) { // Keep asking until user enters a valid training focus
                                focus = prompt("What is your training focus? (Speed, Strength, Endurance, Recovery)").toLowerCase(); // Ask user for training focus
                                if (focus == null) { // If user cancels the prompt
                                  invalidFocus = true; // keep loop running
                                  break; // Exit the loop
                                } else {
                                  invalidFocus = !validFocus.includes(focus); // Check if the focus is in the list of valid options
                                  if (invalidFocus) {
                                    alert("Error: Choose one of the valid options."); // Show error if focus is not valid
                                  } else {
                                    //
                                    // INJURY
                                    //
                                    let injury; // Declare variable to store user's injury status
                                    let yesNo = ["yes", "no"]; // Acceptable yes/no responses
                                    let invalidInjury = true; // Assume injury input is invalid until validated
                                    
                                    while (invalidInjury) { // keep asking until user enters "yes" or "no"
                                      injury = prompt("Do you have any injuries? (Yes/No)").toLowerCase(); // Ask if the user has any injuries
                                      if (injury == null) { // If user cancels the prompt
                                        invalidInjury = true; // Keep loop running
                                        break; // Exit the loop
                                      } else {
                                        invalidInjury = !(yesNo.includes(injury)); // Check if input is not "yes" or "no"
                                        if (invalidInjury) {
                                          alert("Error: Please type Yes or No only."); // Show error for invalid response
                                        } else {
                                          //
                                          // GYM ACCESS
                                          //
                                          let gymAccess; // Variable to store user's gym access response
                                          let invalidAccess = true; // Assume input is invalid
                                          while (invalidAccess) { // Keep asking until the input is valid
                                            gymAccess = prompt("Do you have access to a gym? (Yes/No)").toLowerCase(); // Ask if user has gym access
                                            if (gymAccess == null) { // If user cancels prompt
                                              invalidAccess = true; // Keep loop running
                                              break; // Exit the loop
                                            } else {
                                              invalidAccess = !(yesNo.includes(gymAccess)); // Check if response is not "yes" or "no"
                                              if (invalidAccess) {
                                                alert("Error: Please type Yes or No only."); // Show error for invalid response  
                                              } else {
                                                //
                                                // DAYS
                                                //
                                                let validDays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]; // List of valid days
                                                let days, dayList; // Variables to hold user input and slip day list
                                                let invalidDays = true; // Assume input is invalid until validated
                                                while (invalidDays) { // Keep asking until user enters valid training days
                                                  days = prompt("Which days can you train? (e.g., Monday, Wednesday, Friday)"); // Ask user for a training days
                                                  if (days == null) { // If user cancels the prompt
                                                    invalidDays = true; // Keep loop running
                                                    break; // Exit loop
                                                  } else {
                                                    if (days.includes(",")) { // Check if the input contains a comma
                                                      dayList = days.toLowerCase().split(", ").map(d => d.trim()); // Convert to lowercase, split by commas, trim spaces
                                                      let allValid = dayList.every(day => validDays.includes(day)); // Check if every entered day is valid
                                                      if (allValid) {
                                                        invalidDays = false; // If all days are valid, end the loop
                                                        //
                                                        //
                                                        //
                                                        // === STEP 2: Workouts and Motivation Arrays ===
                                                        let workouts = { // Object containing workouts by training focus and location
                                                          speed: {
                                                            gym: ["Treadmill Sprints", "Agility Ladder", "Sled Push", "Sprint Bands", "Hill Sprints", "Sprint Intervals", "Parachute Sprints"], // Speed-focused gym exercises
                                                            home: ["High Knees", "Shuttle Runs", "Jump Rope", "Cone Drills", "Bursts in Place", "Explosive Starts", "Line Hops"] // Speed-focused home exercises
                                                          },
                                                          strength: {
                                                            gym: ["Leg Press", "Bench Press", "Deadlifts", "Cable Rows", "Shoulder Press", "Lat Pulldown", "Barbell Lunges"], // Strength-focused gym exercises
                                                            home: ["Squats", "Push-ups", "Lunges", "Planks", "Chair Dips", "Wall Sits", "Back Extensions"] // Strength-focused home exercises
                                                          },
                                                          endurance: {
                                                            gym: ["Stationary Bike", "Rowing Machine", "Elliptical", "Treadmill Jog", "Jumping Rope", "Circuit Training", "Arc Trainer"], // Endurance-focused gym exercises
                                                            home: ["Jogging", "Jumping Jacks", "Stair Climbing", "Jump Rope", "Mountain Climbers", "Shadow Boxing", "Burpees"] // Endurance-focused home exercises
                                                          },
                                                          recovery: {
                                                            gym: ["Foam Rolling", "Stretch Machine", "Yoga Class", "Light Treadmill Walk", "Resistance Band Mobility", "Breathing Meditation", "Low Resistance Cycling"], // Recovery-focused gym exercises
                                                            home: ["Stretching", "Foam Rolling", "Yoga", "Breathing Exercises", "Pilates", "Neck Mobility", "Ankle Rotations"] // Recovery-focused home exercises
                                                          }
                                                        };


                                                        let motivationByDay = {
                                                          monday: "Magnificent Monday! Start strong!", // Motivation for Monday
                                                          tuesday: "Terrific Tuesday! Keep that energy up!", // Motivation for Tuesday
                                                          wednesday: "Warrior Wednesday! Power through!", // Motivation for Wednesday
                                                          thursday: "Thunder Thursday! Push your limits!", // Motivation for Thursday
                                                          friday: "Fearless Friday! Finish like a champ!", // Motivation for Friday
                                                          saturday: "Strong Saturday! Keep grinding!", // Motivation for Saturday
                                                          sunday: "Solid Sunday! Recharge and recover!" // Motivation for Sunday
                                                        };


                                                        // === STEP 3: Function to Generate Plan ===
                                                        function getWorkoutPlanForDays(focusArea, location, numDays) {
                                                          let baseList = workouts[focusArea][location]; // Get the list of exercises based on focus and location
                                                          let plan = []; // Final workout plan to be returned


                                                          for (let i = 0; i < numDays; i++) { // Repeat for each training day
                                                            let temp = [...baseList]; // Create a copy of the workout list so we don't change the original
                                                            let dailySet = []; // Holds up to 4 exercises for the day
                                                            for (let j = 0; j < 4; j++) { // Pick up to 4 exercises
                                                              if (temp.length === 0) break; // Stop if there are no more exercises left
                                                              let index = Math.floor(Math.random() * temp.length); // Pick a random index
                                                              dailySet.push(temp.splice(index, 1)[0]); // Remove the exercise at that index and add it to the daily set
                                                            }
                                                            plan.push(dailySet); // Add the completed daily workout set to the full workout plan
                                                          }


                                                          return plan; // Return the complete workout plan for all selcted days
                                                        }


                                                        // === STEP 4: Auto-adjust for Injury ===
                                                        if (injury === "yes") { // If user has an injury
                                                          console.log("Note: Injury reported. Switching focus to Recovery."); // Log a note about switching to recovery plan
                                                          focus = "recovery"; // Changing training focus to recovery
                                                        }


                                                        let location = gymAccess === "yes" ? "gym" : "home"; // Set location based on user's gym access
                                                        let workoutSchedule = getWorkoutPlanForDays(focus, location, dayList.length); // Generate workout plan using focus, location, and number of days


                                                        // === STEP 5: Output Plan ===
                                                        console.log("\n--- Personalized Workout Plan ---"); // Title for output
                                                        console.log("Name: " + name); // Display user's name
                                                        console.log("Age: " + age); // Display user's age
                                                        console.log("Weight: " + weight + " lbs"); // Display user's weight
                                                        console.log("Height: " + feet + "ft " + inches + "in"); // Display user's height
                                                        console.log("Sport: " + sport.charAt(0).toUpperCase() + sport.slice(1)); // Display sport with first letter capitalized
                                                        console.log("Focus: " + focus.charAt(0).toUpperCase() + focus.slice(1)); // Display focus with first letter capitalized
                                                        console.log("Training Location: " + (location === "gym" ? "Gym" : "Home")); // Show gym or home based on user's access
                                                        console.log("Training Days: " + dayList.join(", ")); // Display list of training days, separated by commas


                                                        console.log("\nDaily Motivation and Exercises:"); // Title for the workout section
                                                        for (let i = 0; i < dayList.length; i++) { // Loop through each training day
                                                          let day = dayList[i]; // Get current day from list
                                                          console.log("\n" + motivationByDay[day]); // Show motivation message for that day
                                                          console.log("Workouts for " + day.charAt(0).toUpperCase() + day.slice(1) + ":"); // Show day name with first letter capitalized
                                                          for (let j = 0; j < workoutSchedule[i].length; j++) { // Loop through that day's workout exercises
                                                            console.log("- " + workoutSchedule[i][j]); // Print each workout with a dash
                                                          }
                                                        }
                                                      } else {
                                                        invalidDays = true;
                                                        alert("Error: Make sure day names are typed correctly."); // Show error if a day is not in the validDays list
                                                      }
                                                    } else {
                                                      invalidDays = true;
                                                      alert("Error: Use commas to separate days."); // Show error if user doesn't separate days with commas
                                                    }  
                                                  }
                                                }
                                              } 
                                            }   
                                          }
                                        } 
                                      }
                                    }
                                  }
                                } 
                              }                              
                            }
                          }
                        }  
                      } else {
                        invalidHeight = true; 
                        alert("Error: Use exact format like '5ft 11in' with no letters or missing parts."); // Show error if height format is incorrect
                      } 
                    }
                  }  
                }                
              }
            }          
          }
        }
      }
    }  
  }
}
