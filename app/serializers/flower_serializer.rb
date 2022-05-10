class FlowerSerializer < ActiveModel::Serializer
  attributes :id, :type_species, :name, :season, :subseason, :color, :height, :description, :image_url
  belongs_to :user
  has_many :locations
end
