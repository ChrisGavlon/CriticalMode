class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    wrap_parameters false
    before_action :authorize
    skip_before_action :authorize, only: [:index, :show]

    def index
        reviews = Review.all.order(created_at: :desc)
        render json: reviews
    end

    def create
        review = Review.create!(review_params)
        render json: review, status: :created
    end

    def show
        review = find_review
        render json: review
    end

    def update
        review = find_review
        review.update(review_params)
        render json: review
    end

    def destroy
        review = find_review
        review.destroy
        head :no_content
    end

    private

    def find_review
        Review.find(params[:id])
    end

    def review_params
        params.permit(:score, :title, :body, :user_id, :game_id)
    end

    def render_not_found_response
        render json: { error: "Review Not Found" }, status: :not_found
    end

    def render_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end

    def authorize
        return render json: { error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end

end
