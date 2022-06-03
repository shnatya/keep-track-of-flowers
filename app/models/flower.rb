class Flower < ApplicationRecord
  belongs_to :user
  has_many :planting_operations, dependent: :destroy
  has_many :locations, through: :planting_operations

  validates :name, presence: true, uniqueness: { case_sensitive: false }
  validates :image_url, presence: true, uniqueness: true
  validates :type_species, :height, :season, :subseason, presence: true
  validates :subseason, inclusion: {in: %w(Early Mid Late), message: "%{value} is not accebtable. Please use Early, Mid or Late"}

  def bloom
    "#{self.season} - #{self.subseason}"
  end
end


