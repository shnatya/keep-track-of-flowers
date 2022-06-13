# README

# Description of Keep Track of Your Flowers App

Keep Track of Your Flowers App allows users to store information about flowers themselve, such as: name, type, color, height, season, subseason, description, image. And also it allows users to save  information about locations whrere flowers were planted. 

## Installation
In the repository of this app, copy information about this repository in **Code** section.
In your terminal, type *git clone* and paste what you have copied from GitHub.

To start the server, type in your terminal: 
### `$ rails s`
 
This will run your server on port
[http://localhost:3001](http://localhost:3001).

To start working with database in your terminal:
### `$ rails c`

To run the app in the development mode, open:
[http://localhost:3000/login](http://localhost:3000/login) to view it in your browser.

Application is deployed on Heroku [https://keep-track-of-flowers.herokuapp.com/](https://keep-track-of-flowers.herokuapp.com/)

## API database

The database has four tables: users, flowers, locations, and planting_operations. Between users and flowers tables, there is one-to-many relationship: a flower has only one user, but a user has many flowers. 
        
Between flowers and locations tables, there is many-to-many relationship: a flower has many locations, and one location might have many different flowers planted. This relationship is established in a join table planting_operations with foreign keys - flower_id and location_id. 

Between users and planting operations, there is on-to-many relationship: a user has many planting operations, and planting operation has one user.

# How to use?
First, log in or sign up.

On the first page called **Catalog** there are all flowers saved in the flowers table.

In order to **add** a new flower, push **Add**, then fill out the form. Such fields as flower name, type, height,season, subseason, and url image are necessary.

If you upload pictures from Google Drive, then use Google Drive Image URL Converter, for example https://codepen.io/DrewJaynes/details/abJNNjb to convert the url. Also, make sure that a file's extension is jpg, but not HEIC. HEIC stands for High-Efficiency Image Container file and is usually created on Apple devices (iPad, iPhone).

To **delete** a flower or flowers, check as many flowers as you want to delete and push **Delete**. If a flower has been already planted, then you recieve a message on the screen: "Can NOT delete the flower! Somebody's planted it." Otherwise, the flower will be deleted. 

To **update** a flower, push **Tools** in the upper right conner of each flower card. Only the user who added the flower to the database has permission to update it.

To **plant** flower/flowers, first check flowers on the Flowers page, push **Next Step** on the right side of the page. Then on the Locations page check as many locations as you'd like and push **Plant**. On the Planting Operations page, you see new just added planting operations and old ones. Remember, flowers are allowered to be planted at unique locations, otherwise you will get a message about the duplicate planting operation. 

To see all your planting operations, push **Your planting**. 
To check flowers that you have added, push **Your summary**. 


## Routing using Rails on Ruby

This API has next routes:

-  get "locations"

- get "planting-operations"
- post "planting_operations"
- delete "planting-operation/:id"
- get "users/:id/planting-operations"

- get 'flowers'
- post 'flower'
- patch 'flower/:id'
- delete 'flower/:id'
- get 'users/:id/flowers/summary'

- post 'login'
- delete 'logout'

- get 'me'
- post 'signup'

Working with this routes,  you request locations, flowers, and planting operations from the database. Also, you add new flowers and planting operations or delete them, you can update flowers and get summary on your added flowers.

# Flowers References

In this project, some flower pics were taken from this website:
- https://www.tulips.com/


# License
[MIT](https://choosealicense.com/licenses/mit/)

