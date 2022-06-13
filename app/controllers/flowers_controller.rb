class FlowersController < ApplicationController
    wrap_parameters format: []
    before_action :find_flower, only: [:destroy, :update]

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

     #GET "/flowers" 
     def index
        flowers = Flower.all.order(name: :asc)
        render json: flowers, methods: [:bloom]
    end

    #POST "/flowers"
    def create
        flower = Flower.create!(flower_params)
        render json: flower
    end

    #PATCH "/flowers/:id"
    def update
        if @flower[:user_id] == session[:user_id]
            @flower.update!(flower_params)
            render json: @flower
        else
           render json: {errors: ["Not authorized to update this flower!"]}, status: :unauthorized
        end
    end

    #DELETE "/flowers"
    def destroy
        if @flower.planting_operations.length != 0
            render json: {errors: ["Can NOT delete the flower! Somebody's planted it."]}
        else 
            @flower.destroy
            render json: @flower.id
        end
    end

    #GET "users/:id/flowers/summary"
    def summary
        user = User.find_by_id(session[:user_id])
        if user
            flowers = user.flowers
            render json: flowers, each_serializer: FlowerSummarySerializer
        else
            render json: {errors: ["Not authorized!"]}, status: :unauthorized
        end
    end


    private 

    def flower_params
        params.permit(:id, :name, :type_species, :season, :subseason, :color, :height, :description, :image_url, :user_id)
    end

    def find_flower
        @flower = Flower.find(params[:id])
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def render_not_found
        render json: {errors: ["Flower not found"]}, status: :not_found
    end
end


