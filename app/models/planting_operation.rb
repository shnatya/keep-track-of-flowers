class PlantingOperation < ApplicationRecord
  belongs_to :flower
  belongs_to :location
end
