class Flower < ApplicationRecord
  belongs_to :user
  has_many :planting_operations
  has_many :locations, through: :planting_operations

  validates :name, presence: true, uniqueness: true
end
