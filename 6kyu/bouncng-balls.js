// A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

// Examples:
// - h = 3, bounce = 0.66, window = 1.5, result is 3

// - h = 3, bounce = 1, window = 1.5, result is -1

// (Condition 2) not fulfilled).

//solution:
function bouncingBall(h, bounce, window) {
  // your code here
  if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
    let count = 1; //the mother sees the ball once when it's falling
    while (h * bounce > window) {
      //while the ball is higher than the window after bouncing (i.e. the mother can see it)
      count += 2; //the ball passes the window twice: once on the way down, and once on the way up
      h *= bounce; //score the height of the ball after bouncing (i.e. the height of the ball after the first bounce is 3 * 0.66 = 1.98 so h=1.98)
    }
    return count;
  } else {
    return -1;
  }
}

//sample runnings:
console.log(bouncingBall(3.0, 0.66, 1.5)); // 3
console.log(bouncingBall(30.0, 0.66, 1.5)); // 15
console.log(bouncingBall(30, 0.75, 1.5)); // 21
console.log(bouncingBall(3, 1, 1.5)); // -1
