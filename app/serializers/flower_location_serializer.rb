class FlowerLocationSerializer < ActiveModel::Serializer
  attributes :id, image_url, :description, :name
end
