class FlowerOrderSerializer < ActiveModel::Serializer
  attributes :id, :year
  has_one :flower
end
