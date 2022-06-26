class LocationsController < ApplicationController
    before_action :authorized

     #GET "/locations" 
     def index
        locations = @user.locations
        render json: locations
    end

    #POST "/locations"
    def create
        location = @user.locations.create!(location_params)
        render json: location
    end

    #DELETE "/locations/:id"
    def destroy
        location = Location.find_by_id(params[:id])
        if(location.planting_operations.empty?)
            location.destroy
            render json: location
        else
            render json: {errors: ["This location is in use. First delete planting operations at this location."]} 
        end
    end

    private

    def location_params
        params.permit(:name, :description, :image_url)
    end

    def authorized
        render json: {errors: ["Not authorized"]}, status: :unauthorized unless session.include? :user_id
        @user = User.find_by_id(session[:user_id])
    end
end
