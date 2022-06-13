class PlantingOperationsController < ApplicationController
    #wrap_parameters format: []
    before_action :authorized

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    #GET "/users/:id/planting-operations" 
    def index
        user = User.find_by_id(session[:user_id])
        planting_operations = user.planting_operations
        render json: planting_operations
    end

    #POST "/planting-operations"
    def create
        user = User.find_by_id(params[:planting][:user_id])
        @flower = Flower.find_by_id(params[:planting][:flower_id])
        @location = Location.find_by_id(params[:planting][:location_id])
        planting_operation = user.planting_operations.create!(flower_id: @flower.id, location_id: @location.id)    
        render json: planting_operation, status: :created
    rescue ActiveRecord::RecordInvalid 
        render_duplicate_response
    end
    

    #DELETE "/delete-planting-operation/:id"
    def destroy
        planting_operation = PlantingOperation.find_by(id: params[:id])
        planting_operation.destroy
        render json: planting_operation
    end

    private

    def not_found
        render json: {errors: ["Please log in first"]}
    end
    
    def authorized
        render json: {errors: ["Not authorized"]}, status: :unauthorized unless session.include? :user_id
    end

    def render_duplicate_response
        render json: {errors: ["NOT PLANTED!!! - {#{@flower.name} : #{@location.description}} operation already exists!"]}, status: :unprocessable_entity
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end









