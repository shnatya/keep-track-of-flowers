class PlantingOperationsController < ApplicationController
    wrap_parameters format: []
   # before_action :find_user, only : [:index]
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    #GET "/users/:id/planting-operations" 
    def index
        user = User.find_by(id: params[:id])
        if user
            planting_operations = user.planting_operations
            render json: planting_operations
        else 
            render json: {errors: ["Not authorized!"]}, status: :unauthorized
        end
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
    
    def render_duplicate_response
        render json: {errors: ["NOT PLANTED!!! - {#{@flower.name} : #{@location.description}} operation already exists!"]}, status: :unprocessable_entity
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def planting_operations_params
        params.permit(:flower_id, :location_id)
    end

end









#def create
 #   @flower = Flower.find(params[:planting][:flower_id])
  #  @location = Location.find_by_id(params[:planting][:location_id])
   # planting_operation = PlantingOperation.new(flower_id: @flower.id, location_id: @location.id)
    #if planting_operation.valid?
     #   planting_operation.save
      #  render json: planting_operation, status: :created
    #else
     #   render_duplicate_response
    #end    
#end



#def create
  #  @flower = Flower.find(params[:planting][:flower_id])
   # @location = Location.find_by_id(params[:planting][:location_id])
    #if @flower.locations.include?(@location)
     #   render_duplicate_response
    #else
     #   planting_operation = PlantingOperation.create!(flower_id: @flower.id, location_id: @location.id)
      #  render json: planting_operation, status: :created
    #end
      
#end

=begin
def create
        @flower = Flower.find_by_id(params[:planting][:flower_id])
        @location = Location.find_by_id(params[:planting][:location_id])
        planting_operation = PlantingOperation.create!(flower_id: @flower.id, location_id: @location.id)    
        render json: planting_operation, status: :created
    rescue ActiveRecord::RecordInvalid 
        render_duplicate_response
    end

    def create
        session[:number_operations] ||= 0
        if session[:number_operations] < 1
            session[:number_operations] = session[:number_operations] + 1
            @flower = Flower.find_by_id(params[:planting][:flower_id])
            byebug
            @user = @flower.user
            @location = Location.find_by_id(params[:planting][:location_id])
            planting_operation = PlantingOperation.create!(flower_id: @flower.id, location_id: @location.id)    
            render json: planting_operation, status: :created
        else 
            render json: {errors: ["Hey #{@user[:username]}, you planted 10 times already. It's time to buy our membership."]}
        end
    end
=end
