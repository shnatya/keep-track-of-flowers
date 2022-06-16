class UsersController < ApplicationController
    #GET "/me"
    def show
        user = User.find_by_id(session[:user_id])
        if user
            render json: user
        else 
            render json: {errors: ["Not authorized"]}, status: :unauthorized 
        end
    end

    #POST "/signup"
    def create 
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def user_with_most_flowers
        user = User.user_most_flowers
        render json: user[0]
    end


    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
