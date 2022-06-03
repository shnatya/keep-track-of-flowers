class FlowersController < ApplicationController
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

     #GET "/flowers" 
     def index
        flowers = Flower.all
        render json: flowers, include: ['flower', 'flower.user', 'locations'], methods: [:bloom]
    end

    #POST "/add-new-flower"
    def create
        flower = Flower.create!(flower_params)
        render json: flower
    end

    #PATCH "/update-flower/:id"
    def update
        flower = find_flower
        flower.update!(flower_params)
        render json: flower
    end

    #DELETE "/delete-flower"
    def destroy
        flower = find_flower
        flower.destroy
        render json: flower.id
    end

    private 

    def flower_params
        params.permit(:id, :name, :type_species, :season, :subseason, :color, :height, :description, :image_url, :user_id)
    end

    def find_flower
        Flower.find(params[:id])
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