class PlantingOperationsController < ApplicationController
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    #GET "/planting-operations" 
    def index
        planting_operations = PlantingOperation.all
        render json: planting_operations
    end

    #POST "/planting-operations"
    def create

        ##write a rescue method just for this craete action 
        flower = Flower.find(params[:planting][:flower_id])
        location = Location.find_by_id(params[:planting][:location_id])
        planting_operation = PlantingOperation.create!(flower_id: flower.id, location_id: location.id)
        render json: planting_operation, status: :created  
    end

    #DELETE "/delete-planting-operation/:id"
    def destroy
        planting_operation = PlantingOperation.find_by(id: params[:id])
        planting_operation.destroy
        render json: planting_operation
    end

    private

    def planting_operations_params
        params.permit(:flower_id, :location_id)
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
