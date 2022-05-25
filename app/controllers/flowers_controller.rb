class FlowersController < ApplicationController
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
     #GET "/database" 
     def index
        flowers = Flower.all
        render json: flowers, include: ['flower', 'flower.user', 'locations']
    end

    #POST "/add-new-flower"
    def create
        flower = Flower.create!(flower_params)
        render json: flower
    end

    #PATCH "/update-flower/:id"
    def update
        flower = Flower.find_by(id: params[:id])
        flower.update!(flower_params)
        render json: flower
    end

    #DELETE "/delete-flower"
    def destroy
        flower = Flower.find_by(id: params[:id])
        flower.destroy
        render json: flower.id
    end

    private 
    def flower_params
        params.permit(:id, :name, :type_species, :season, :subseason, :color, :height, :description, :image_url, :user_id)
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
