class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :likes, :dislikes, :user_id, :review_id
end
