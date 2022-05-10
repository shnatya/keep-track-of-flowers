class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image_url
  has_many :flowers
end
