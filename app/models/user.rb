class User < ApplicationRecord
    has_secure_password
    has_many :flowers
    has_many :planting_operations

    validates :username, presence: :true, uniqueness: { case_sensitive: false}, length: {minimum: 3}

    def self.user_most_flowers 
        User.joins(:flowers).group("users.id").order("COUNT(flowers.id) DESC").limit(1)
    end
end
