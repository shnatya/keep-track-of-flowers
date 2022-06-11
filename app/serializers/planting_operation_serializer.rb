class PlantingOperationSerializer < ActiveModel::Serializer
  attributes :id, :location_id, :user_id
  has_one :flower
  has_one :location
end
