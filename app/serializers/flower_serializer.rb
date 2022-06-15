class FlowerSerializer < ActiveModel::Serializer
  attributes :id, :type_species, :name, :height, :image_url, :bloom, :summary_description

  has_many :locations

  def summary_description
    "#{self.object.name} is #{self.object.description[0..15]}..."
  end
end
