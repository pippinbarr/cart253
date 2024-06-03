console.log(` /\\_/\\                          /\\_/\\ \n( o.o ) p5.commonGameFunctions ( o.o )\n > ^ <                          > ^ <\n`)
/** Author: Nicolas Morales-Sanabria
 * This library contains useful functions that can be used across different 2d games */


/** easily display images instead of shapes
 *  this function is reused from my "Love Actually" exercise
 * @param obj object to be drawn
 * @param type type or case of object to be drawn
 * @param specialTexture a specific texture to be used (for type 2) */
p5.prototype.displayObjAsImage = function (obj, type, specialTexture, cameraOffsetX, cameraOffsetY) {
    switch (type) {
        case 0: //adjust to draw instead of an ellispe (centered)
            image(obj.texture, obj.x - obj.size / 2, obj.y - obj.size / 2, obj.size, obj.size);
            break;
        case 1: //adjust to draw instead of a square (corner)
            image(obj.texture, obj.x, obj.y, obj.size, obj.size);
            break;
        case 2: //adjust to draw instead of an ellispe but using a predefined texture
            image(specialTexture, obj.x - obj.size / 2, obj.y - obj.size / 2, obj.size, obj.size);
            break;
        case 3:
            //display image for rect(with cameraOffset)
            image(obj.texture, obj.x + cameraOffsetX, obj.y + cameraOffsetY, obj.w, obj.h);
            break;
        default: //invalid type
            console.log("DisplayImage Wrong type bud: " + type);
            break;
    }
};

/**compares X & Y of two objects & affects the mover's accel/speed to go towards or flee the target
 * @param  mover the object being moved
 * @param  target the object being chased
 * @param  usage 1 to  chase, -1 to flee */
p5.prototype.chaseFleeTarget = function (mover, target, usage) {
    //horizontal movement - detect direction change & affect speed
    let directionX = usage * Math.sign(target.x - mover.x);
    let accelX = directionX * mover.accel;
    mover.vx += accelX;
    //limit speed to max speed then move object
    if (abs(mover.vx) > abs(mover.maxSpeed)) {
        mover.vx = mover.maxSpeed * directionX;
    }
    mover.x += mover.vx;
    //vertical movement - detect direction change & affect speed
    let directionY = usage * Math.sign(target.y - mover.y);
    let accelY = directionY * mover.accel;
    mover.vy += accelY;
    //limit speed to max speed then move object
    if (abs(mover.vy) > abs(mover.maxSpeed)) {
        mover.vy = mover.maxSpeed * directionY;
    }
    mover.y += mover.vy;
    // console.log("mover speed X: " + mover.vx + "mover speed Y: " + mover.vy); //test acceleration
};

/** Allows the user to control an object's speed with accelerations, using the arrow keys or WASD
 * @param obj object to be controlled with keys */
p5.prototype.keyMovementSolo = function (obj, type) {
    //horizontal movement
    if (type === 0 || type === 1) {
        if ((keyIsDown(39) && !keyIsDown(37)) || (keyIsDown(68) && !keyIsDown(65))) {
            obj.vx = obj.vx + obj.accel;
        } else if (keyIsDown(37) && !keyIsDown(39) || (keyIsDown(65) && !keyIsDown(68))) {
            obj.vx = obj.vx - obj.accel;

        } else if ((!keyIsDown(37) && !keyIsDown(39)) || (keyIsDown(37) && keyIsDown(39)) || (keyIsDown(65) && keyIsDown(68))) {
            if (abs(obj.vx) > (obj.maxSpeed * 0.01)) {
                obj.vx /= 1.03;
            } else {
                obj.vx = 0;
            }
        }
    }
    //vertical movement
    if (type === 0 || type === 2) {
        if ((keyIsDown(38) && !keyIsDown(40)) || (keyIsDown(87) && !keyIsDown(83))) {
            obj.vy -= obj.accel;
        } else if (keyIsDown(40) && !keyIsDown(38) || (keyIsDown(83) && !keyIsDown(87))) {
            obj.vy += obj.accel;
        } else if ((!keyIsDown(40) && !keyIsDown(38)) || (keyIsDown(40) && keyIsDown(38)) || (keyIsDown(83) && keyIsDown(87))) {
            if (abs(obj.vy) > (obj.maxSpeed * 0.01)) {
                obj.vy /= 1.03;
            } else {
                obj.vy = 0;
            }
        }
    }
    //limit to max speed
    obj.speed = sqrt(pow(obj.vx, 2) + pow(obj.vy, 2));
    if (obj.speed > obj.maxSpeed) {
        obj.vx *= (obj.maxSpeed / obj.speed);
        obj.vy *= (obj.maxSpeed / obj.speed);
    } //move obj
    obj.x += obj.vx;
    obj.y += obj.vy;
};

/** calculates the angle between the user and draws him rotated, taking into account any offset of the user (ie. from the middle of the screen)
 * @param cameraOffsetX any horizontal offset to take into account to draw the user
 * @param cameraOffsetY any vertical offset to take into account to draw the user */
p5.prototype.displayObjRotatingToTarget = function (obj, target, texture, cameraOffsetX, cameraOffsetY) {
    push();
    angleMode(DEGREES);
    obj.angle = atan2(target.y - obj.y, target.x - obj.x);
    translate(obj.x + cameraOffsetX, obj.y + cameraOffsetY);
    rotate(obj.angle - 90);
    image(texture, -obj.size / 2, -obj.size / 2, obj.size, obj.size);
    pop();
};

/** returns a boolean indicating if two ellipses are overlapping
 * @param a the first ellipse
 * @param b the second ellipse
 * @return true if they are overlapping, false if they aren't */
p5.prototype.checkCirclesOverlap = function (circle1, circle2) {
    if (dist(circle1.x, circle1.y, circle2.x, circle2.y) < circle1.size / 2 + circle2.size / 2)
        return true;
    else
        return false;
};

/** Repositions an object while making sure it is outside another
  * a buffer distance multiplier can be added
  * @param obj the object to be randomly repositioned 
  * @param other the object to stay outside of
  * @param distMultiplier a distance multiplier buffer for extra space between the objects (>=1) */
p5.prototype.repositionCircleOutsideOther = function (obj, other, distMultiplier) {
    let tempPos = {
        x: random(0, width),
        y: random(0, height)
    }
    while (dist(obj.x, obj.y, other.x, other.y) < (obj.size / 2 + other.size / 2) * distMultiplier) {
        tempPos.x = random(0 + obj.size, width - obj.size);
        tempPos.y = random(0 + obj.size, height - obj.size);
    }
    obj.x = tempPos.x;
    obj.y = tempPos.y;
};

/** Prevents an object from leaving the viewable window area, sets it back inside and inverts its speed.
 * @param obj object to be locked inside the window 
 * @param type 0 for horizontal & vertical, 1 for horizontal, 2 for vertical */
p5.prototype.lockCircleInWindow = function (obj, type, bounceRate) {
    //horizontally
    if (type === 0 || type === 1) {
        if ((obj.x < obj.size / 2)) {
            obj.x = obj.size / 2;
            obj.vx *= -bounceRate;
        }
        else if ((obj.x > width - obj.size / 2)) {
            obj.x = width - obj.size / 2;
            obj.vx *= -bounceRate;
        }
    } //vertically
    if (type === 0 || type === 2) {
        if ((obj.y < obj.size / 2)) {
            obj.y = obj.size / 2;
            obj.vy *= -bounceRate;
        }
        else if ((obj.y > height - obj.size / 2)) {
            obj.y = height - obj.size / 2;
            obj.vy *= -bounceRate;
        }
    }
};

/** allows for moving objects to have random spasms with set percentages and intensity
 * @param obj  object to introduce random speed changes to
 * @param odds % probability of a spasm to occur (between 0-1)
 * @param intensity an intensity multiplier relative to the max speed of the object */
p5.prototype.randomSpasm = function (obj, odds, intensity) {
    if (random(0, 1) <= odds) {
        obj.vx = random(-obj.maxSpeed * intensity, obj.maxSpeed * intensity);
        obj.vy = random(-obj.maxSpeed * intensity, obj.maxSpeed * intensity);
    }
};
