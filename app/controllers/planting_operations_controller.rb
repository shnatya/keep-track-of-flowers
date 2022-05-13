class PlantingOperationsController < ApplicationController
    #GET "/planting_operations" 
    def index
        planting_operations = PlantingOperation.all
        render json: planting_operations
    end

    #POST "/planting-operations"
    def create
        
        array_of_operations = []
        params.each_key do |key, i| 
                flower = Flower.find_by_id(params[:"#{i}"][:flower_id])
                location = Location.find_by_id(params[:"#{i}"][:location_id])
                planting_operation = PlantingOperation.create!(flower_id: flower.id, location_id: location.id)
                byebug
        end
        
        render json: array_of_operations, status: :created  
    end

    private

    def planting_operations_params
        params.permit(:flower_id, :location_id)
    end
end
