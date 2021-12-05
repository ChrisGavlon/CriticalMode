class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :img, :developer, :genre

  has_many :reviews
end
