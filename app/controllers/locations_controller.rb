class LocationsController < ApplicationController
     #GET "/locations" 
     def index
        locations = Location.all
        render json: locations
    end
end
