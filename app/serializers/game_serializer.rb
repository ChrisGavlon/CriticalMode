class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :img, :developer, :genre
end
