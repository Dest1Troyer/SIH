function suggestCareer() {
    // Get the answers from the user
    var q1 = document.getElementById("q1").value;
    var q2 = document.getElementById("q2").value;
    var q3 = document.getElementById("q3").value;
    var q4 = document.getElementById("q4").value;
    var q5 = document.getElementById("q5").value;
    var q6 = document.getElementById("q6").value;
    var q7 = document.getElementById("q7").value;

    // Create an array to hold the career suggestions
    var careers = [];

    // First 51 Careers
    if (q1 == "yes" && q2 == "yes" && q3 == "no" && q4 == "no" && q5 == "yes" && q6 == "no" && q7 == "no") {
        careers.push("Doctor");
    }
    if (q1 == "yes" && q2 == "yes" && q3 == "no" && q4 == "no" && q5 == "no" && q6 == "no" && q7 == "yes") {
        careers.push("Engineer");
    }
    if (q1 == "no" && q2 == "no" && q3 == "no" && q4 == "yes" && q5 == "no" && q6 == "yes" && q7 == "yes") {
        careers.push("Graphic Designer");
    }
    if (q1 == "yes" && q2 == "no" && q3 == "yes" && q4 == "no" && q5 == "yes" && q6 == "yes" && q7 == "no") {
        careers.push("Teacher");
    }
    if (q1 == "no" && q2 == "yes" && q3 == "no" && q4 == "yes" && q5 == "no" && q6 == "no" && q7 == "yes") {
        careers.push("Animator");
    }
    if (q1 == "no" && q2 == "yes" && q3 == "no" && q4 == "no" && q5 == "no" && q6 == "no" && q7 == "yes") {
        careers.push("Data Analyst");
    }
    if (q1 == "no" && q2 == "yes" && q3 == "no" && q4 == "no" && q5 == "no" && q6 == "no" && q7 == "yes") {
        careers.push("Software Developer");
    }
    if (q1 == "yes" && q2 == "yes" && q3 == "no" && q4 == "no" && q5 == "yes" && q6 == "no" && q7 == "yes") {
        careers.push("Architect");
    }
    if (q1 == "no" && q2 == "no" && q3 == "no" && q4 == "yes" && q5 == "yes" && q6 == "no" && q7 == "no") {
        careers.push("Marketing Manager");
    }
    if (q1 == "yes" && q2 == "no" && q3 == "no" && q4 == "no" && q5 == "yes" && q6 == "yes" && q7 == "no") {
        careers.push("Lawyer");
    }
    if (q1 == "yes" && q2 == "yes" && q3 == "no" && q4 == "no" && q5 == "yes" && q6 == "no" && q7 == "no") {
        careers.push("Accountant");
    }
    if (q1 == "yes" && q2 == "yes" && q3 == "yes" && q4 == "no" && q5 == "no" && q6 == "yes" && q7 == "no") {
        careers.push("Scientist");
    }
    if (q1 == "yes" && q2 == "no" && q3 == "yes" && q4 == "no" && q5 == "no" && q6 == "yes" && q7 == "no") {
        careers.push("Psychologist");
    }
    if (q1 == "no" && q2 == "no" && q3 == "yes" && q4 == "no" && q5 == "yes" && q6 == "no" && q7 == "no") {
        careers.push("Chef");
    }
    if (q1 == "no" && q2 == "yes" && q3 == "no" && q4 == "no" && q5 == "yes" && q6 == "no" && q7 == "yes") {
        careers.push("Civil Engineer");
    }
    
    // Remaining 51 Careers
    if (q1 == "no" && q2 == "yes" && q3 == "no" && q4 == "no" && q5 == "no" && q6 == "no" && q7 == "yes") {
        careers.push("Web Developer");
    }
    if (q1 == "no" && q2 == "yes" && q3 == "no" && q4 == "yes" && q5 == "no" && q6 == "no" && q7 == "yes") {
        careers.push("Mechanical Engineer");
    }
    if (q1 == "no" && q2 == "no" && q3 == "no" && q4 == "yes" && q5 == "no" && q6 == "yes" && q7 == "yes") {
        careers.push("Interior Designer");
    }
    if (q1 == "yes" && q2 == "no" && q3 == "yes" && q4 == "no" && q5 == "yes" && q6 == "yes" && q7 == "no") {
        careers.push("HR Manager");
    }
    if (q1 == "no" && q2 == "yes" && q3 == "no" && q4 == "yes" && q5 == "no" && q6 == "no" && q7 == "yes") {
        careers.push("Product Manager");
    }
    if (q1 == "no" && q2 == "yes" && q3 == "no" && q4 == "no" && q5 == "no" && q6 == "no" && q7 == "yes") {
        careers.push("Database Administrator");
    }
    if (q1 == "no" && q2 == "yes" && q3 == "no" && q4 == "no" && q5 == "no" && q6 == "no" && q7 == "yes") {
        careers.push("Game Developer");
    }
    if (q1 == "yes" && q2 == "yes" && q3 == "no" && q4 == "no" && q5 == "yes" && q6 == "no" && q7 == "yes") {
        careers.push("Construction Manager");
    }
    if (q1 == "no" && q2 == "no" && q3 == "no" && q4 == "yes" && q5 == "yes" && q6 == "no" && q7 == "no") {
        careers.push("Advertising Manager");
    }
    if (q1 == "yes" && q2 == "no" && q3 == "no" && q4 == "no" && q5 == "yes" && q6 == "yes" && q7 == "no") {
        careers.push("Legal Consultant");
    }
    if (q1 == "yes" && q2 == "yes" && q3 == "no" && q4 == "no" && q5 == "yes" && q6 == "no" && q7 == "no") {
        careers.push("Economist");
    }
    if (q1 == "yes" && q2 == "yes" && q3 == "yes" && q4 == "no" && q5 == "no" && q6 == "yes" && q7 == "no") {
        careers.push("Biomedical Engineer");
    }
    if (q1 == "yes" && q2 == "no" && q3 == "yes" && q4 == "no" && q5 == "no" && q6 == "yes" && q7 == "no") {
        careers.push("Social Worker");
    }
    if (q1 == "no" && q2 == "no" && q3 == "yes" && q4 == "no" && q5 == "yes" && q6 == "no" && q7 == "no") {
        careers.push("Chef");
    }
    if (q1 == "no" && q2 == "yes" && q3 == "no" && q4 == "no" && q5 == "yes" && q6 == "no" && q7 == "yes") {
        careers.push("Network Engineer");
    }
    else if (q1 == "yes" && q2 == "yes" && q3 == "yes" && q5 == "yes") {
        careers.push("Pilot");
    }
    else if (q1 == "no" && q2 == "yes" && q4 == "yes" && q6 == "yes") {
        careers.push("Firefighter");
    }
    else if (q1 == "no" && q3 == "yes" && q5 == "yes" && q7 == "yes") {
        careers.push("Paramedic");
    }
    else if (q2 == "yes" && q4 == "yes" && q6 == "yes" && q7 == "yes") {
        careers.push("Farmer");
    }
    else if (q1 == "yes" && q3 == "no" && q5 == "yes" && q6 == "no") {
        careers.push("Real Estate Agent");
    }
    else if (q1 == "yes" && q3 == "yes" && q4 == "yes" && q7 == "yes") {
        careers.push("Athlete");
    }
    else if (q1 == "yes" && q5 == "yes" && q6 == "yes") {
        careers.push("Entrepreneur");
    }
    else if (q3 == "yes" && q4 == "no" && q6 == "yes" && q7 == "no") {
        careers.push("Pharmacist");
    }
    else if (q2 == "yes" && q3 == "no" && q6 == "yes" && q7 == "yes") {
        careers.push("Investment Banker");
    }
    else if (q1 == "yes" && q4 == "no" && q5 == "yes" && q6 == "yes") {
        careers.push("Social Worker");
    }
    else if (q2 == "no" && q3 == "yes" && q4 == "yes" && q7 == "yes") {
        careers.push("Fashion Designer");
    }
    else if (q1 == "yes" && q2 == "yes" && q4 == "yes" && q5 == "yes") {
        careers.push("Veterinarian");
    }
    else if (q1 == "no" && q2 == "yes" && q3 == "yes" && q5 == "yes") {
        careers.push("Industrial Designer");
    }
    else if (q3 == "yes" && q4 == "yes" && q5 == "yes" && q7 == "yes") {
        careers.push("Event Planner");
    }
    else if (q1 == "yes" && q2 == "no" && q3 == "no" && q6 == "yes") {
        careers.push("Librarian");
    }
    else if (q1 == "yes" && q2 == "yes" && q4 == "no" && q7 == "yes") {
        careers.push("Urban Planner");
    }
    else if (q1 == "no" && q3 == "yes" && q5 == "no" && q6 == "yes") {
        careers.push("Customer Support Specialist");
    }
    else if (q2 == "yes" && q3 == "yes" && q4 == "yes" && q6 == "yes") {
        careers.push("Public Relations Manager");
    }
    else if (q2 == "yes" && q3 == "no" && q5 == "yes" && q6 == "yes") {
        careers.push("Statistician");
    }
    else if (q1 == "yes" && q2 == "no" && q5 == "yes" && q7 == "yes") {
        careers.push("Sales Manager");
    }
    else if (q1 == "yes" && q3 == "no" && q6 == "yes" && q7 == "yes") {
        careers.push("Consultant");
    }
    else if (q2 == "yes" && q3 == "no" && q4 == "yes" && q7 == "yes") {
        careers.push("Photographer");
    }
    else if (q1 == "yes" && q3 == "yes" && q5 == "no" && q7 == "yes") {
        careers.push("Logistics Manager");
    }
    else if (q1 == "no" && q2 == "yes" && q3 == "yes" && q6 == "yes") {
        careers.push("Nurse");
    }
    else if (q2 == "no" && q3 == "yes" && q5 == "yes" && q6 == "yes") {
        careers.push("Dietitian");
    }
    else if (q1 == "yes" && q2 == "yes" && q3 == "yes" && q6 == "yes") {
        careers.push("Supply Chain Manager");
    }
    else if (q1 == "yes" && q2 == "yes" && q5 == "yes" && q6 == "yes") {
        careers.push("Human Resources Manager");
    }
    else if (q2 == "yes" && q3 == "no" && q4 == "no" && q6 == "yes") {
        careers.push("Biochemist");
    }
    else if (q1 == "no" && q2 == "no" && q3 == "yes" && q4 == "yes") {
        careers.push("Community Service Manager");
    }
    else if (q1 == "yes" && q3 == "yes" && q5 == "yes" && q6 == "no") {
        careers.push("Financial Analyst");
    }
    else if (q1 == "yes" && q3 == "no" && q6 == "yes" && q7 == "no") {
        careers.push("Operations Manager");
    }
    else if (q2 == "yes" && q4 == "yes" && q6 == "no" && q7 == "yes") {
        careers.push("Choreographer");
    }
    else if (q1 == "yes" && q2 == "yes" && q4 == "no" && q6 == "yes") {
        careers.push("Agricultural Engineer");
    }
    else if (q1 == "yes" && q3 == "yes" && q4 == "no" && q6 == "yes") {
        careers.push("Dental Hygienist");
    }
    else if (q1 == "yes" && q2 == "no" && q4 == "no" && q6 == "yes") {
        careers.push("Physician Assistant");
    }
    else if (q1 == "yes" && q2 == "yes" && q4 == "no" && q6 == "yes") {
        careers.push("Orthodontist");
    }
    else if (q1 == "yes" && q3 == "yes" && q4 == "yes" && q5 == "yes") {
        careers.push("Zoologist");
    }
    else if (q2 == "yes" && q3 == "no" && q6 == "yes" && q7 == "no") {
        careers.push("Environmental Scientist");
    }
    else if (q1 == "yes" && q3 == "yes" && q4 == "yes" && q7 == "no") {
        careers.push("Geologist");
    }
    

    // If no career is matched
    if (careers.length == 0) {
        careers.push("Explore different fields to find what you love.");
    }

    // Display the suggestions
    document.getElementById("careerSuggestion").innerHTML = careers.join(", ");
}

