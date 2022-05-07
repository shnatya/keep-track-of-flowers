class Flower < ApplicationRecord
  belongs_to :user
  has_many :flower_orders
end
