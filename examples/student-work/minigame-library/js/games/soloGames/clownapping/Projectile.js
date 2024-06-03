/** Projectile class
 * @author Nicolas Morales-Sanabria
 * 
 * Allows the creation, repositioning and drawing of a single or multiple Projectile objects 
  *at different positions, with different speeds, sizes and directions*/
class Projectile {

    /** Creates a new projectile at the desired coordinates, size, speed and angle
     * @param  x desired horizontal position
     * @param  y desired vertical position
     * @param  size desired size
     * @param  speed desired acceleration
     * @param  angle desired max speed*/
    constructor(x, y, size, speed, angle) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.angle = angle;
    }

    /** recalculates the positions of a projectile array according to their angle and draws them taking into account any visual offsets
     * @param cameraOffsetX any horizontal offset to take into account to draw the projectile
     * @param cameraOffsetY any vertical offset to take into account to draw the projectile
     * @param projectiles the array of projectiles to recalculate & draw */
    static moveDrawProjectiles(cameraOffsetX, cameraOffsetY, projectiles) {
        for (let projectile of projectiles) {
            //recalculates projectile positions
            projectile.x += (cos(projectile.angle) * projectile.speed);
            projectile.y += (sin(projectile.angle) * projectile.speed);
            //draws the projectiles
            ellipse(projectile.x + cameraOffsetX, projectile.y + cameraOffsetY, projectile.size, projectile.size);
            // console.log(`Proj speeds: X: ${cos(projectile.angle)} speed: ${projectile.speed}`);
        }
    }
}