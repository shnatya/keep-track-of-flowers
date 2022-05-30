# README

# Description of Keep Track of Your Flowers App

Keep Track of Your Flowers App allows users to store information about flowers themselve, such as: name, type, color, height, season, subseason, description, image. And also it allows users to save  information about locations whrere  flowers were planted. 


## Installation
In the repository of this app, copy information about this repository in **Code** section.
In your terminal, type *git clone* and paste what you have copied from GitHub.

To start the server, type in your terminal: 
### `$ rails s`
 
This will run your server on port
[http://localhost:9293/jokes](http://localhost:9293/jokes).

To start working with database in your terminal:
### `$ bundle exec rake console`

To run the app in the development mode, open:
[http://localhost:3000](http://localhost:3000) to view it in your browser.

okes app allows users to store their jokes, filter jokes by category and delete jokes by fetching requests to Sinatra backend.

## Jokes database

Jokes database has four tables: users, jokes, categories, and joke_categories. Between users and jokes tables, there is one-to-many relationship: a joke has only one user, but a user has many jokes. Thanks to this relationship, you can find out the the user’s name who wrote the joke, and also filter out all jokes for a certain user. 
        
Between jokes and categories tables, there is many-to-many relationship: a joke has many categories, and one category has many jokes. This relationship is established in a join table joke_categories with foreign keys - joke_id and category_id. Thanks to this relationship, you can filter jokes by one category.

# How to use?
First, log in or sign up.

On the first page called **Catalog** there are all flowers saved in the flowers table.

In order to **add** a new flower, push **Add**, then fill out the form. Such fields as flower name, type, height, subseason, and url image are necessary.

To **delete** a flower or flowers, check as many flowers as many you want to delete and push **Delete**. Flower/-(s) and its/their planting operations will be deleted from the planting_operations table too.

To **update** a flower, push **Tools** in the upper right conner of each flower card. Update the flower and submit.

To **plant** flower/flowers, check flowers, push **Next Step** on the right side ofthe page. Then check as many locations as you'd like and push **Plant**. On the planting operations page, you see new just added planting operations and old ones.


## Routing using Rails on Ruby

This API has next routes:

-  get "/locations"

  post "/create-planting-operations"
  get "/planting-operations"
  delete "/delete-planting-operation/:id"

  get '/flowers'
  post '/add-new-flower'
  patch '/update-flower/:id'
  delete '/delete-flower/:id'

  post '/login'
  delete '/logout'

  get '/me'
  post '/signup'

Working with this routes,  you request locations from the database, add new jokes to it, and delete jokes from the database, respectively.

# Flowers References

In this project, some flower pics were taken from the next website:
- https://www.tulips.com/


# License
[MIT](https://choosealicense.com/licenses/mit/)

