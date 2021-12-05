class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :prof_img, :bio, :password_digest

  has_many :reviews
  has_many :comments
end
