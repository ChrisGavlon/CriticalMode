class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :score, :title, :body, :user_id, :game_id

  belongs_to :user
end
