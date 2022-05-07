class Location < ApplicationRecord
    has_many :planting_operations
    has_many :flower_orders, through: :planting_operations
end
