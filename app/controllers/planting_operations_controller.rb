class PlantingOperationsController < ApplicationController
    #GET "/planting_operations" 
    def index
        planting_operations = PlantingOperation.all
        render json: planting_operations
    end

    #POST "/planting-operations"
    def create
        byebug
    end

    private

    def planting_operations_params
        params.permit(:flower_id, :location_id)
    end
end
