class FlowerOrdersController < ApplicationController
     #GET "/myorders" 
     def index
        user = User.find_by_id(session[:user_id])
        if user.valid? 
           flower_orders = FlowerOrder.first
            render json: flower_orders, include: [:flower, :user, :locations, :planting_operations]
        else
            render json: {errors: ["Not authorizes"]}, status: :unauthorizeds
        end
    end
end
