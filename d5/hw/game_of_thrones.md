# Game of Thrones

#### Objectives

* Practice with object-oriented Javascript
* Practice with Javascript inheritance
* Practice with Javascript testing utilizing Jasmine

As we all know, sh*t's hitting the fan in Game of Thrones. Let's use our suite JS chops to model the characters of Westeros!

#### Assignment

* Implement tested Javascript code to model the following classes.
* Make sure to write your tests first.
* **One step at a time**: Start implementing one level at a time. Begin with `Lifeform`, then move on to the next level with `Beast` and `Humanoid`, and so on.
* **Don't forget to test.**

## Inheritance chart
```
                 Lifeform
                   | |
            _______| |_______
           /                 \
         Beast           Humanoid
        /   |            /  |    \
  Direwolf  |           /   |    Westerosian
            |          /    |
          Dragon      |     Wildling
                      |
                      Whitewalker
```

## Classes

### Lifeform

* `name` - string
* `age` - number
* `hp` - number
* `attack` - number
* `battleCry()` - return the string "Die!"

#### Humanoid

* `introduce()` - return the string "Greetings. I am [name]."

##### Westerosian

* `house` - string
* `swordplay()` - return the string "Cling clang cling. Clang."
* `battleCry()` - return the string "I am [name] of house [house] and I will slay you."

##### Whitewalker

* `babiesEaten` - array
* `eatBaby(babyName)`
* `battleCry()` - return the string "I have eaten [how many] babies, and so I will surely destroy you."

##### Wildling

* `cannibal?` - boolean
* `climb()` - return the string "We're heading into Westeros!"
* `battleCry()` - return the string "Snow or not, you know nothing."

#### Beasts

* `roar()` - return the string "ROOOOOOOAR!"
* `bite()` - return the string "CRUNCH CRUNCH"

##### Direwolf

* `stark` - westerosian object
* `speed` - number
* `battleCry()` - roar + "coming at you at [speed] speed."

##### Dragon

* `mother` - westerosian object (Dany, duh)
* `breatheFire()` - "BURRRRRRRN!"
* `canFly?` - boolean

## Functions

Great! Now we have these suite classes that we can use to build objects. Let's make some suite functions that will utilize these objects to wage wars in Westeros!

* `makeArmy(lifeforms, num)` - return an array with `num` elements by sampling `lifeforms` array (like we generate pokemans weeks ago!)
* `battle(army1, army2)`
  * Match up each element in army1 against the corresponding element in army2.
  * For each matchup,
    * Call the `battleCry()` function of each lifeform
    * Determine the winner of the matchup (the lifeform with the greater sum of `(hp + attack)` wins the matchup)
    * Print the winner of the matchup
  * The army with more matchup wins is the winner of the battle. Return a string "Army [either 1 or 2] is the winner"
