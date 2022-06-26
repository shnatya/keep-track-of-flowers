class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image_url, :user_id
end
