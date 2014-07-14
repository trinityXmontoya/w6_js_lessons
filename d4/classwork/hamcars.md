#HAMCars
![alt](http://www.marcellusonmainstreet.org/uploads/businesses/logos/1c6cd25a-ebbb-4213-9c30-135e16cbc7a6.jpg)
# is expanding! **BIG SURPRISE!**

HAMco is branching out into the new and used automobile market. But first we need an app to keep track of our inventory.

#### Part 1
Define a constructor, `Car`. A car should have the following properties:

- make
- year
- doors
- color

#### Part 2
Define the following prototype properties:

- drive -> a function that will return a string: `Drivin down the block in my <year the car was made> <car make>`
- driveSlow -> a function that return the string: `You know me, I'm just drivin' something candy-coated, crawling like a caterpillar`
- information -> a string listing the details of the car: `1964 Chevy, 4 doors, red paint`
- upgradeRims -> a function that will accept a single parameter and add a new property: `rims` to the car, which should be a string: `Sittin on <rim size> inch chromed out rims`

#### Part 3
Define a function `newCar()	` that will create 20 cars with random attributes. The function should accept a single parameter, an object containing an array of random car attributes, and select a random make, year, door, and color attribute and assign it to a new car. These cars should be stored in an array of cars.

```
var carStats = {
	makes: ["Chevy", "Honda","Nissan","Toyota","BMW","Mercedes-Benz","Cadillac"],
	years: [1999,2014,1905,2010,1996,1994,1972,1957, 1946],
	doors: [1,2,3,4,5],
	colors: ["reddish green","blue ivy","silken road","burnt orange", "taupe"]
};	
```

#### Iterate over that array of cars and print each car's information to the console