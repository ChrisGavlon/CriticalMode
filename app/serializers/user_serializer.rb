class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :prof_img, :bio
end
