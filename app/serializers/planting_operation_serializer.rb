class PlantingOperationSerializer < ActiveModel::Serializer
  attributes :id
  has_one :flower
  has_one :location
end
