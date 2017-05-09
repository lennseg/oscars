#The Academy Outliers: Interactive Visualization
------------------------------------------------------------
##Spring 2017

Last fall, I wanted to create a visualization from the [Academy Awards Database](http://awardsdatabase.oscars.org/). It’s a pretty large database so I focused on their statistics. The statistics are arranged by award category and represent 89 years of Academy Awards history through the 2016 (89th) Awards.

This visualization shows 57 actors and actresses who have been nominated five or more times in a leading or supporting role.

![lennsegarcia-oscars](https://cloud.githubusercontent.com/assets/21225598/25236277/7bb79c3a-25b5-11e7-932e-d42bff2dca0d.jpg)

The next step was to make this visualization interactive.

#Process

##Creating the Grid

<img width="800" alt="screen shot 2017-04-20 at 10 45 41 am" src="https://cloud.githubusercontent.com/assets/21225598/25236938/36e61a08-25b7-11e7-9b36-0828ba1d808c.png">

<img width="800" alt="screen shot 2017-04-20 at 10 54 55 am" src="https://cloud.githubusercontent.com/assets/21225598/25237161/e085ade4-25b7-11e7-9c5e-8f5dd26eff67.png">

Users can sort the nominees by gender (male or female) or revert back to view all the nominees by selecting any button on top. 

<img width="463" alt="screen shot 2017-05-08 at 11 24 31 pm" src="https://cloud.githubusercontent.com/assets/21225598/25834657/741ae3d8-3447-11e7-9816-2a25d6c82efe.png">

##Creating the Datasets

I wanted to get specific information from each nominee. Instead pulling from an API, I decided to create the datasets. Each actor has an id with their last name. The data includes their name, academy award nominations, academy award wins and genres of their entire career.

<img width="600" alt="screen shot 2017-05-03 at 12 24 46 pm" src="https://cloud.githubusercontent.com/assets/21225598/25670754/b529a1e8-2ffb-11e7-9b13-10957f766af3.png">

The next step was to display the data once the user clicks on a nominee. This was the most challenging part of building this website. 

<img width="700" alt="screen shot 2017-05-03 at 12 25 08 pm" src="https://cloud.githubusercontent.com/assets/21225598/25830765/17be75d8-342d-11e7-9256-4e6a7b789481.png">

After the data was displayed, I was having issues with resetting the window modal when the user selects a new nominee. Data was being added to the current actor or actress. 

<img width="720" alt="screen shot 2017-05-08 at 11 25 40 pm" src="https://cloud.githubusercontent.com/assets/21225598/25834892/e431fe3a-3448-11e7-9770-ab09d097794a.png">

