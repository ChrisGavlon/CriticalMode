class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity


    def create
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        end
    end

    def show
        user = User.find(session[:user_id])
        render json: user
    end

    def update
        user = User.find(session[:user_id])
        user.update(update_params)
        render json: user
    end

    private

    def update_params
        params.permit(:username, :prof_img, :bio, :id)
    end

    def user_params
        params.permit(:username, :password, :password_confirmation, :bio, :prof_img)
    end

    def render_not_found_response
        render json: { error: "User not found" }, status: :not_found
    end

    def render_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end
end
