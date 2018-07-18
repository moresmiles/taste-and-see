class BeerSerializer < ActiveModel::Serializer
  attributes :id, :name, :style, :rating, :notes, :user_id
end
