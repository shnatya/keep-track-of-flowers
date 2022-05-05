class FlowersController < ApplicationController
     #GET "/flowers" 
     def index
        flowers = Flower.all
        render json: flowers
    end
end
