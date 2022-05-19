class FlowersController < ApplicationController

     #GET "/database" 
     def index
        flowers = Flower.all
        render json: flowers, include: ['flower', 'flower.user', 'locations']
    end

    #DELETE "/delete-flower"
    def destroy
        flower = Flower.find_by(id: params[:id])
        flower.destroy
        render json: flower.id
    end

end

