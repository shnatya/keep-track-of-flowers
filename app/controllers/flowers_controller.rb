class FlowersController < ApplicationController

     #GET "/database" 
     def index
        flowers = Flower.all
        render json: flowers, include: ['flower', 'flower.user', 'locations']
    end


end

