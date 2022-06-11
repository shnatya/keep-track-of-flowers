class PlantingOperation < ApplicationRecord
  belongs_to :flower
  belongs_to :location
  belongs_to :user
  
  validates :flower_id, uniqueness: {scope: [:location_id, :user_id]}
end




















#validates :flower_id, uniqueness: {scope: :location_id}

 #validates :flower_id, uniqueness: {scope: :location_id, message: "#{} already has been planted at this location."}
