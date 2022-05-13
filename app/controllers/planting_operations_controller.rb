class PlantingOperationsController < ApplicationController
    #GET "/planting_operations" 
    def index
        planting_operations = PlantingOperation.all
        render json: planting_operations
    end

    #POST "/planting-operations"
    def create
        flower = Flower.find_by_id(params[:planting][:flower_id])
        location = Location.find_by_id(params[:planting][:location_id])
        planting_operation = PlantingOperation.create!(flower_id: flower.id, location_id: location.id)
        render json: planting_operation, status: :created  
    end

    private

    def planting_operations_params
        params.permit(:flower_id, :location_id)
    end
end
