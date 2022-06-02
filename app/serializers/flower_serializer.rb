class FlowerSerializer < ActiveModel::Serializer
  attributes :id, :type_species, :name, :subseason, :color, :height, :image_url, :bloom
  belongs_to :user
  has_many :locations
end
