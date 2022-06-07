class PlantingOperation < ApplicationRecord
  belongs_to :flower
  belongs_to :location
  
  validates :flower_id, uniqueness: {scope: :location_id}
end




















#validates :flower_id, uniqueness: {scope: :location_id}

 #validates :flower_id, uniqueness: {scope: :location_id, message: "#{} already has been planted at this location."}
