/**
 * MakeCode Arcade generated game in JavaScript
 */
// Collecting items
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    music.baDing.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let collectible: Sprite = null
let enemy: Sprite = null
// Initializing the player sprite
let player2 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f e e e e e f . . . . . 
    . . . f d d d d d d e f . . . . 
    . . . f d f d d f d e f . . . . 
    . . . f d d d d d d e f . . . . 
    . . . f d d d d d d e f . . . . 
    . . . f e e e e e e e f . . . . 
    . . . f e e e e e e e f . . . . 
    . . . f d d d d d d e f . . . . 
    . . . f d d d d d d e f . . . . 
    . . . f e e e e e e e f . . . . 
    . . . . f e e e e e f . . . . . 
    . . . . . f f f f f . . . . . . 
    `, SpriteKind.Player)
// Enabling player control
controller.moveSprite(player2)
// Initializing score
info.setScore(0)
// Losing condition
info.setLife(3)
// Creating enemies
game.onUpdateInterval(2000, function () {
    enemy = sprites.create(img`
        . . . . . . . b b b b b . . . . 
        . . . . . . b 4 4 4 4 4 b . . . 
        . . . . . b d 4 4 4 4 4 4 b . . 
        . . . . . b 3 3 4 4 d 4 4 b . . 
        . . . b 4 4 4 3 4 4 4 4 4 b . . 
        . . b 3 3 4 4 4 4 4 4 4 4 b . . 
        . . b d 4 4 4 4 4 4 4 d b b . . 
        . b 4 4 4 4 4 4 4 4 d d b b b . 
        . b 4 4 4 4 4 4 4 d d b b 4 b b 
        . b 4 4 4 4 4 4 d d b b 4 b 4 b 
        . b 4 4 4 4 4 d d b b 4 b 4 b b 
        . b d d d 4 d d b b 4 4 b b 4 b 
        . b d d d d d d b 4 4 4 b b 4 b 
        . . b d d d d b b 4 4 4 b b . . 
        . . . b b b b 4 4 4 4 4 b . . . 
        . . . . . . b 4 4 4 4 b . . . . 
        `, SpriteKind.Enemy)
    // Positioning the enemies randomly
    enemy.setPosition(Math.randomRange(0, screen.width), Math.randomRange(0, screen.height))
})
// Creating collectibles
game.onUpdateInterval(1000, function () {
    collectible = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 2 2 2 . . . . . 
        . . . . . . . 2 2 3 2 2 2 . . . 
        . . 2 2 2 2 2 2 3 3 3 3 2 . . . 
        . 2 2 3 3 3 3 3 3 3 3 2 2 2 . . 
        2 2 2 3 3 3 3 3 3 3 3 3 2 2 . . 
        . 2 2 3 3 3 3 3 3 3 3 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    // Positioning the collectibles randomly
    collectible.setPosition(Math.randomRange(0, screen.width), Math.randomRange(0, screen.height))
})
// Win condition
game.onUpdateInterval(10000, function () {
    if (info.score() >= 10) {
        game.over(true)
    }
})
