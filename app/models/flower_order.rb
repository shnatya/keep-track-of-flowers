class FlowerOrder < ApplicationRecord
  belongs_to :flower
  has_many :planting_operations
  has_many :locations, through: :planting_operations
end
