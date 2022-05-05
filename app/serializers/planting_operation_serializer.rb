class PlantingOperationSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :notes, :gardener_id
  has_one :flower_order
  has_one :location
end
