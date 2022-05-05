class PlantingOperation < ApplicationRecord
  belongs_to :flower_order
  belongs_to :location
end
