# Visualizing Graudate Outcomes

A Ruby on Rails application visualizing the graduate outcome data of Grinnell students.

* Contributors: [Rexford Essilfie](https://github.com/RexfordEssilfie), [Tal Rastopchin](https://github.com/trastopchin), [Michael Spicer](https://github.com/Citywideiowa0), [Vijeeth Guggilla](https://github.com/vijeethguggilla), [Giang Khuat](https://github.com/giangkhuat)
* Alumni Mentor: Ian Young
* Professor: Barbara Johnson
* Community Partner: Sarah Barks
* Timeline: Fall 1 2020

## Description

The goal of this project is to create an efficient web application that facilitates the data analysis process so that the CLS can visualize graduate outcomes data based on demographic factors. The web application should provide the flexibility to explore various visualizations of the data based on the choice of specific dependent and independent variables. Ultimately, by using this tool, the CLS can identify any disparities in student trajectories and target key points of intervention. For example, if it is discovered that students identifying as ‘Hispanic’ are finding significantly less career-related jobs after graduation than other students, the CLS may develop certain programming in collaboration with organizations such as the Student Organization of Latinxs (SOL).

# Prerequisites

* Amazon Cloud9 setup
* Yarn
* Ruby version 2.6.3
* Ubuntu Operating System

# Setting up the project on Amazon C9:

1. If you are using an Amazon Cloud9 environment, follow Hartl's tutorial to properly set one up. We highly recommend that instead of using the free Cloud9 tier, apply for a free [AWS education account](https://aws.amazon.com/education/awseducate/). Then, when creating a new environment select the largest education tier, `m5.xlarge`.

2. Make sure that you have all the required prerequisites.

3. Make sure yarn is installed

`source <(curl -sL https://cdn.learnenough.com/yarn_install)`

4. Clone the repository to your computer

`https://github.com/CSC322-Grinnell/graduate-outcomes.git                                                             `

After this, navigate to the project directory in your C9 environment

5. Install necessary gems

`bundle install --without production`         

# Running the project:

 Run this command in the top level directory of your project

`rails server`


# Project Components

In this section we will give a high level description of the components of this Ruby on Rails application. Following the Rails project directory convention, most of the important project files are located in the `/app`, `/db`, and `/test` directories. Our models, views, controllers, and tests are all defined and located in their respective named directories.

## Models

Our project uses a `student` model to encode individual students, and a `visualization`, `variable`, and `filter` to encode a single visualization. You can view our original UML model / class diagrams visually detailing our models in the xyz directory. You can view the current state of the database tables in the `/db/schema.rb` file.

- The `student` model attributes are hard coded based on the sample dummy input data that our community partner shared with us. The model validates the presence of every attribute, and only validates the uniqueness of the `student_id` attribute.

- The `visualization` model represents a visualization that a user creates. A `visualization` keeps track of chart specifics,  such as the type, title, and axis  titles. Each visualization is configured by keeping track of many variables and filters. Currently, we have hardcoded our `visualization` creation form to require two variables and two filters.

- The `variable` model represents a named dependent or independent variable that is used to create a visualization.

- The `filter` model represents a rule or constraint that meaningfully relates an dependent variable to an independent variable. Each filter has a filter type attribute, which describes the effect of the filter (such as `Equals`, for example) and a variable name, which represents what variable the filter influences. Each filter also has a value1 attribute and an optional value2 attribute. While a filter with filter type `Equals` only needs one input, `From..To` is a filter that can take two values, Eg. from the class year of 2019 to the class year of 2020. So, filter keeps track of a second conditional attribute value2.

It is important to note that designing a model that can represent the many different ways one can visualize data is very complicated. So, we had to make some compromises with our model design so that we could have something to start to work with. We believe that our model design works really well to create visualizations with one dependent variable, one independent variable, two filters, and a displayed count. We encourage developers to take advantage of the fact that each `visualization` has many variables and filters, instead of completely redesigning the model from scratch, when expanding the visualization configuration capabilities.

## Views

Our projects views use the `form_with` Rails method to create integrated and validated forms for our models. Other than that, don't have any specific design details to share about the contents of our views.

## Controllers

Our project has two controllers, a `VisualizationsController` and an `UploadsController`. Both controllers follow the RESTful routes and actions conventions created by including `resources :visualizations` and `resources :uploads` in the `/config/routes.rb` routing file. To get a view of which named routes correspond to which named actions, run the
```
rake routes
```
Rails command.

## Tests

Our project includes controller, integration, and model tests. We have extensive student model testing, but all testing needs to be expanded upon. Part of the reason why we are missing a lot of the `visualization`, `variable`, and `filter` tests was because we were still wrapping our heads around everything works together until the last sprint. Now that we have a basic functionality that allows users to create and view their visualizations, we need to create rigorous model tests. We detail some tests we did not have time to start in the  TODOs document.

- Our controller tests just make sure that we get responses when getting the appropriately named paths. These can by expanded upon.

- We have one integration test that checks to make sure that the proper HTML links appear in the navigation bar. This can be expanded on.

- Our `student` model test has the proper presence and uniqueness tests for each of the model's attributes.

- We do not have specific `visualization` or `variable` tests, and these needs to be implemented.

- Our `filter` model test only validates a valid filter. We need to create more tests for invalid filters, as well as add a conditional validation for the presence of the `value2` attribute in the model.

# Tools & Learning Resources
- Ruby on Rails Tutorial by Hartl 
- [Filter Graph](https://filtergraph.com/)
- [Chartkick](https://chartkick.com/)


# References

- Reference Hartl ??
