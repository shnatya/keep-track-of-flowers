class FlowerOrdersController < ApplicationController
     #GET "/flower_orders" 
     def index
        flower_orders = FlowerOrder.all
        render json: flower_orders
    end
end
