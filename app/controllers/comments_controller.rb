class CommentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    wrap_parameters false
    before_action :authorize
    skip_before_action :authorize, only: [:index, :show]

    def index
        comments = Comment.all
        render json: comments
    end

    def show
        comment = find_comment
        render json: comment
    end

    def create
        comment = Comment.create!(comment_params)
        render json: comment, status: :created
    end

    def destroy
        comment = find_comment
        comment.destroy
        head :no_content
    end

    private

    def comment_params
        params.permit(:body, :review_id, :user_id)
    end

    def find_comment
        Comment.find(params[:id])
    end

    def render_not_found_response
        render json: { error: "Comment Not Found" }, status: :not_found
    end

    def render_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end

    def authorize
        return render json: { error: "Not Authorized To Comment" }, status: :unauthorized unless session.include? :user_id
    end
end
