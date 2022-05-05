class FlowerSerializer < ActiveModel::Serializer
  attributes :id, :type, :name, :season, :subseason, :color, :height, :description, :image_url
  has_one :user
end
