function atmWithdrawal(balance, amount, pin, enteredPin) {
    if (enteredPin !== pin) return "Incorrect PIN";
    if (amount > balance) return "Insufficient Funds";
    if (amount % 100 !== 0) return "Enter amount in multiples of 100";
    return "Withdrawal Successful";
}
function calculateFinalAmount(orderAmount) {
    let discount = 0;
    let shipping = 0;

    if (orderAmount > 1000) {
        discount = 0.20 * orderAmount;
    } else if (orderAmount >= 500) {
        discount = 0.10 * orderAmount;
    }

    if (orderAmount > 50) {
        shipping = 0;
    } else {
        shipping = 10;
    }

    let finalAmount = orderAmount - discount + shipping;
    return finalAmount;
}
function calculateGrade(marks, attendance) {
    if (attendance > 90) marks += 5;

    if (marks >= 90) return "A";
    if (marks >= 80) return "B";
    if (marks >= 70) return "C";
    if (marks >= 60) return "D";
    return "F";
}
function trafficLightControl(density) {
    if (density === "Heavy Traffic") return 60;
    if (density === "Moderate Traffic") return 40;
    return 20;
}
function calculateTicketPrice(age, showTime) {
    let price = 12;

    if (showTime < 17) price -= 0.20 * price;
    if (age > 60) price -= 0.30 * price;
    if (age < 12) price -= 0.40 * price;

    return price;
}
function isEligibleForJob(age, experience, qualification) {
    if (age >= 21 && age <= 55 && experience >= 2 && qualification === "Bachelor's Degree") {
        return true;
    }
    return false;
}
function applyCoupon(orderAmount, couponCode) {
    if (couponCode === "DISCOUNT10" && orderAmount > 500) {
        return orderAmount - 0.10 * orderAmount; 
    }
    if (couponCode === "FREESHIP" && orderAmount > 200) {
        return orderAmount; 
    }
    return orderAmount;
}
function choosePlan(planType, wantsTrainer, wantsDietPlan) {
    if (planType === "Basic") return "Basic plan: $20/month";
    if (planType === "Premium") return wantsTrainer ? "Premium plan: $50/month" : "Premium plan: $50/month (Trainer Included)";
    if (planType === "VIP") return wantsDietPlan ? "VIP plan: $80/month (Diet Plan Included)" : "VIP plan: $80/month";
}
function calculateElectricityBill(units, timeOfDay) {
    let rate = 0;
    if (units < 100) rate = 5;
    else if (units <= 300) rate = 4;
    else rate = 3;

    let totalBill = units * rate;

    if (timeOfDay < 8 || timeOfDay >= 20) {
        totalBill *= 1.10; 
    }

    return totalBill;
}
function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
    let fare = 300;

    if (classType === "Business") fare += 200;
    else if (classType === "First") fare += 500;

    if (luggageWeight > 20) fare += 50 * Math.ceil((luggageWeight - 20) / 10);

    if (isStudent) fare *= 0.85; 
    if (isSenior) fare *= 0.90; 

    return fare;
}
console.log("ATM Withdrawal:", atmWithdrawal(2000, 500, "1234", "1234")); // Expected Output: "Withdrawal Successful"
console.log("Final Amount after Shopping:", calculateFinalAmount(1500)); // Expected Output: 1200
console.log("Grade with Extra Credit:", calculateGrade(88, 95)); // Expected Output: "A"
console.log("Traffic Light Duration:", trafficLightControl("Heavy Traffic")); // Expected Output: 60
console.log("Movie Ticket Price:", calculateTicketPrice(30, 16)); // Expected Output: 9.6
console.log("Is Eligible for Job:", isEligibleForJob(30, 5, "Bachelor's Degree")); // Expected Output: true
console.log("Price after Coupon:", applyCoupon(600, "DISCOUNT10")); // Expected Output: 540
console.log("Fitness Plan Suggestion:", choosePlan("Premium", true, true)); // Expected Output: "Premium plan: $50/month"
console.log("Electricity Bill:", calculateElectricityBill(150, 22)); // Expected Output: 660
console.log("Flight Ticket Fare:", calculateFlightFare("Business", 30, true, false)); // Expected Output: 470
