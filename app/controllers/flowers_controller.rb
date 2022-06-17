class FlowersController < ApplicationController
    before_action :authorized, only: [:create, :summary]
    before_action :find_flower, only: [:destroy, :update]
    before_action :find_user, only: [:create, :summary]

     #GET "/flowers" 
     def index
        flowers = Flower.all
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
        if @flower[:user_id] == session[:user_id]
            if @flower.planting_operations.length != 0
                render json: {errors: ["Can NOT delete the flower! Somebody's planted it."]}
            else
                @flower.destroy
                render json: @flower.id
            end
        else 
            render json: {errors: ["Not authorized to delete this flower!"]}, status: :unauthorized
        end
    end

    #GET "users/:id/flowers/summary"
    def summary
        flowers = @user.flowers
        render json: flowers, each_serializer: FlowerSummarySerializer
    end


    private 

    def flower_params
        params.permit(:id, :name, :type_species, :season, :subseason, :color, :height, :description, :image_url, :user_id)
    end

    def find_flower
        @flower = Flower.find(params[:id])
    end

    def find_user
        @user = User.find_by_id(session[:user_id])
    end

    def authorized
        render json: {errors: ["Not authorized"]}, status: :unauthorized unless session.include? :user_id
    end
end


