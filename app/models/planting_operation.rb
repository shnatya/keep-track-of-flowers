class PlantingOperation < ApplicationRecord
  belongs_to :flower
  belongs_to :location

  validates :flower_id, uniqueness: {scope: :location_id, message: "already has been planted at this location."}
  #validates :flower_id, uniqueness: {scope: :location_id, message: "#{@fl_id} already has been planted at this #{loc_id}."}
end

#before_validation(on: :create) do   
  #@fl_id = self.flower_id
  #@loc_id = self.location_id
#end

