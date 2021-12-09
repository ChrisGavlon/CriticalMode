class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :score, :title, :body, :user_id, :game_id, :created_at

  belongs_to :user
  belongs_to :game
  has_many :comments
end
