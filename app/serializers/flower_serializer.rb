class FlowerSerializer < ActiveModel::Serializer
  attributes :id, :type_species, :name, :height, :image_url, :bloom, :summary

  has_many :locations
  has_many :planting_operations

  def summary
    "#{self.object.name} is #{self.object.description[0..15]}..."
  end
end
