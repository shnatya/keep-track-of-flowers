class FlowerSummarySerializer < ActiveModel::Serializer
  attributes :summary

  def summary
    "#{self.object.name} belongs to #{self.object.type_species} species and blooms in #{self.object.subseason} #{self.object.season}."
  end
end
