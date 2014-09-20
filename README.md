# Thermostat

This repo contains a thermostat written in javascript.

The functionality will be:

1. Thermostat starts at 20 degrees

2. You can increase the temp with the up button

3. You can decrease the temp with the down button

4. The minimum temperature is 10 degrees

5. If power saving mode is on, the maximum temperature is 25 degrees

6. If power saving mode is off, the maximum temperature is 32 degrees

7. Power saving mode is on by default

8. You can reset the temperature to 20 by hitting the reset button

9. You can see the temperature displayed in Celsius or Fahrenheit by pressing a button.

9. The thermostat should color the display based on energy usage - < 18 is green, < 25 is yellow, otherwise red

===

How to use it:

1. Download or clone this repo.
2. `cd path/folder` 
3. Type `bundle install`
4. and then type `rackup`
5. Visit 127.0.0.1:9292

===

The technologies used in this project are: Jasmine BDD, JQuery, Sinatra, HTML5 and CSS3
