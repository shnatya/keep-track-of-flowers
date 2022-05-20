class Location < ApplicationRecord
    has_many :planting_operations
    has_many :flowers, through: :planting_operations

    validates :image_url, presence: true
    validates :description, presence: true, uniqueness: true
end
