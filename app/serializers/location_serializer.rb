class LocationSerializer < ActiveModel::Serializer
  attributes :id, :type, :description, :image_url
end
