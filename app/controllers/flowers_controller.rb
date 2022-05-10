class FlowersController < ApplicationController

     #GET "/database" 
     def index
        user = User.find_by_id(session[:user_id])
        if user.valid? 
            flowers = Flower.all

            render json: flowers, include: ['flower', 'flower.user', 'locations']
        else
            render json: {errors: ["Not authorizes"]}, status: :unauthorizeds
        end
    end


end

