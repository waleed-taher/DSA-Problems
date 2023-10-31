/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
// var corpFlightBookings = function(bookings, n) {
//     flightlabel = n
//     let ans = []
//     let start = []
//     let end = []
//     for(i=0 ; i<bookings.length; i++) {
//         for(j=0; j<=i; j++){
//             start.push(bookings[j][0])
//             end.push(bookings[j][1])
             
//         }
//     }

//     console.log(start, end)

// };

var corpFlightBookings = function(bookings, n) {
    let answer = new Array(n).fill(0); // create an array of answer with length of n and with data type of integer(i.e fill all the elements with 0)
     for (let i=0; i<bookings.length; i++) {   // iterate through the bookings array. 
         for (let j=bookings[i][0]-1; j<bookings[i][1]; j++) { // iterate through each bookings subarray.
            answer[j]+=bookings[i][2]; // update each of the answer elements with seats value
            console.log(bookings[i][0]-1, bookings[i][1], bookings[i][2] )
         }
     }

     return answer;
};

corpFlightBookings([[1,2,10],[2,3,20],[2,5,25]], 5)

// Input: bookings = [[1,2,10],[2,3,20],[2,5,25]], n = 5
// Output: [10,55,45,25,25]
// Explanation:
// Flight labels:        1   2   3   4   5
// Booking 1 reserved:  10  10
// Booking 2 reserved:      20  20
// Booking 3 reserved:      25  25  25  25
// Total seats:         10  55  45  25  25
// Hence, answer = [10,55,45,25,25]