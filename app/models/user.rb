class User < ApplicationRecord
    has_secure_password
    has_many :flowers
    has_many :planting_operations
    has_many :locations

    validates :username, presence: :true, uniqueness: { case_sensitive: false}, length: {minimum: 3}

end
