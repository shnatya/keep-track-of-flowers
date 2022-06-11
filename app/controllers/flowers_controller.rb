class FlowersController < ApplicationController
    wrap_parameters format: []
    before_action :find_flower, only: [:destroy, :update]

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

     #GET "/flowers" or "/users/:id/flowers"
     def index
        if params[:id]
            user = User.find_by_id(params[:id])
            flowers = user.flowers.order(name: :asc)
        else
            flowers = Flower.all.order(name: :asc)
        end
        render json: flowers, methods: [:bloom]
    end

    #POST "/flowers"
    def create
        flower = Flower.create!(flower_params)
        render json: flower
    end

    #PATCH "/flowers/:id"
    def update
        @flower.update!(flower_params)
        render json: @flower
    end

    #DELETE "/flowers"
    def destroy
        @flower.destroy
        render json: @flower.id
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


#def index
    #user = User.find_by_id(session[:user_id])
    #flowers = user.flowers
    #render json: flowers, include: ['flower', 'flower.user', 'locations']
#end

#def authorize
     #   return json: {errors: ["Not authorized"]}, status: :unauthorized unless session.include? :user_id
    #end

# before_action :authorize #cant do this i need flowers to collect type at the beginnign

=begin
byebug
        if session[:user_id]
            user = User.find_by_id(session[:user_id])
            byebug
            @flowers = user.flowers
            byebug
        else
            @flowers = Flower.all.order(name: :asc)
        end
        render json: @flowers, methods: [:bloom]
    end
=end

=begin

=end