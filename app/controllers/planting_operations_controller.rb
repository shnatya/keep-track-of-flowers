class PlantingOperationsController < ApplicationController
    #GET "/planting_operations" 
    def index
        planting_operations = PlantingOperation.all
        render json: planting_operations
    end
end
