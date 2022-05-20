class Flower < ApplicationRecord
  belongs_to :user
  has_many :planting_operations, dependent: :destroy
  has_many :locations, through: :planting_operations

  validates :name, presence: true, uniqueness: true
  validates :type_species, :height, subseason, presence: true
  validate :height, numericality: {less_than: 100}
  #validates :subseason, inclusion: {in: %w(Early Mid Late), message: "%{value} is not accebtable. Please use Early, Mid or Late"}
end

#begin custom messs
#validate :must_have_flatiron_email

 # def must_have_flatiron_email
  #  unless email.match?(/flatironschool.com/)
   #   errors.add(:email, "We're only allowed to have people who work for the company in the database!")
    #end
  #end
