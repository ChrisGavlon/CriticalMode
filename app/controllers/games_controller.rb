class GamesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        games = Game.all
        render json: games
    end

    def show
        game = find_game
        render json: game
    end

    private

    def find_game
        Game.find(params[:id])
    end

    def render_not_found_response
        render json: { error: "Game Not Found" }, status: :not_found
    end
end
