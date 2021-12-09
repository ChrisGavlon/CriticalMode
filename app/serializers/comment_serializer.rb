class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :likes, :dislikes, :user_id, :review_id, :created_at

  belongs_to :user
  belongs_to :review
end
