# Weather Application by The Net Ninja.

This is a small API Weather Application which is part of [the Net Ninja udemy course](https://www.udemy.com/course/modern-javascript-from-novice-to-ninja/ "Javascript Course"), I had a lot of fun doing this little project and I learned a lot, I just added little changes where the background changes according to the time of day(Images are shown below.)

---

[Live Preview](https://mohammedghazaly.github.io/Weather-APP/)

---
## How does the porject work?

### `forecast.js`

in the `forecast.js` file, we have two methods.

1. `getcity()` method that that takes in the city name and returns the city key.
2. `getWeather()` method that fetches  the weather details using the city key.

### `app.js`

in the `app.js` file we have some work also.

1. When we enter the city name and press enter we call `updateCity()` that calls the two aforementioned methods and returns an object as promise that is passed for `updateUI()`

2. `updateUI()` then displays the tempreature, the city name, the weather condition, icon the depends on the weather condition and an image according to the time of day of the entered city.

---

## Here are a couple of images of how the app looks like.

### Application at day time

![Weather App when it's day time](./img/project%20images/Weather%20App%20day%20time.png.png)

### Application at night time

### ![Weather app when it's night time](./img/project%20images/Weather%20App%20night%20time.png)
