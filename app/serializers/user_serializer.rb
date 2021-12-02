class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :prof_img, :bio, :password_digest

  has_many :recipes
  has_many :comments
end
